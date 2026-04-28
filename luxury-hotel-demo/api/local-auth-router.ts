import { z } from "zod";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import * as cookie from "cookie";
import { setCookie } from "hono/cookie";
import * as schema from "@db/schema";
import { getDb } from "./queries/connection";
import { createRouter, publicQuery } from "./middleware";
import { signLocalToken, verifyLocalToken, LOCAL_COOKIE_NAME } from "./local-auth";
import { getSessionCookieOptions } from "./lib/cookies";

export const localAuthRouter = createRouter({
  register: publicQuery
    .input(
      z.object({
        username: z.string().min(3).max(50),
        password: z.string().min(6).max(100),
        displayName: z.string().min(1).max(100).optional(),
        email: z.string().email().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const existing = await getDb()
        .select()
        .from(schema.localUsers)
        .where(eq(schema.localUsers.username, input.username))
        .limit(1);

      if (existing.length > 0) {
        throw new Error("Username already taken");
      }

      const passwordHash = await bcrypt.hash(input.password, 12);
      const result = await getDb()
        .insert(schema.localUsers)
        .values({
          username: input.username,
          displayName: input.displayName || input.username,
          email: input.email || null,
          passwordHash,
        });

      const userId = Number(result[0].insertId);
      const token = await signLocalToken({ userId, username: input.username });

      const cookieOpts = getSessionCookieOptions(ctx.req.headers);
      setCookie(ctx as any, LOCAL_COOKIE_NAME, token, {
        ...cookieOpts,
        maxAge: 30 * 24 * 60 * 60,
      });

      return { success: true, userId };
    }),

  login: publicQuery
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const rows = await getDb()
        .select()
        .from(schema.localUsers)
        .where(eq(schema.localUsers.username, input.username))
        .limit(1);

      const user = rows.at(0);
      if (!user) {
        throw new Error("Invalid username or password");
      }

      const valid = await bcrypt.compare(input.password, user.passwordHash);
      if (!valid) {
        throw new Error("Invalid username or password");
      }

      const token = await signLocalToken({ userId: user.id, username: user.username });

      const cookieOpts = getSessionCookieOptions(ctx.req.headers);
      setCookie(ctx as any, LOCAL_COOKIE_NAME, token, {
        ...cookieOpts,
        maxAge: 30 * 24 * 60 * 60,
      });

      return { success: true, userId: user.id };
    }),

  me: publicQuery.query(async ({ ctx }) => {
    const cookies = cookie.parse(ctx.req.headers.get("cookie") || "");
    const token = cookies[LOCAL_COOKIE_NAME];
    if (!token) return null;

    const claim = await verifyLocalToken(token);
    if (!claim) return null;

    const rows = await getDb()
      .select()
      .from(schema.localUsers)
      .where(eq(schema.localUsers.id, claim.userId))
      .limit(1);

    const user = rows.at(0);
    if (!user) return null;

    return {
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    };
  }),

  logout: publicQuery.mutation(async ({ ctx }) => {
    const opts = getSessionCookieOptions(ctx.req.headers);
    ctx.resHeaders.append(
      "set-cookie",
      cookie.serialize(LOCAL_COOKIE_NAME, "", {
        httpOnly: opts.httpOnly,
        path: opts.path,
        sameSite: opts.sameSite?.toLowerCase() as "lax" | "none",
        secure: opts.secure,
        maxAge: 0,
      })
    );
    return { success: true };
  }),
});
