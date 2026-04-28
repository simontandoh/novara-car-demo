import * as cookie from "cookie";
import * as jose from "jose";
import { eq } from "drizzle-orm";
import * as schema from "@db/schema";
import { getDb } from "./queries/connection";
import { env } from "./lib/env";

const LOCAL_JWT_ALG = "HS256";
const LOCAL_COOKIE_NAME = "novara_local_sid";

export async function signLocalToken(payload: { userId: number; username: string }): Promise<string> {
  const secret = new TextEncoder().encode(env.appSecret + "_local");
  return new jose.SignJWT(payload as unknown as jose.JWTPayload)
    .setProtectedHeader({ alg: LOCAL_JWT_ALG })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret);
}

export async function verifyLocalToken(token: string): Promise<{ userId: number; username: string } | null> {
  if (!token) return null;
  try {
    const secret = new TextEncoder().encode(env.appSecret + "_local");
    const { payload } = await jose.jwtVerify(token, secret, {
      algorithms: [LOCAL_JWT_ALG],
      clockTolerance: 60,
    });
    return payload as unknown as { userId: number; username: string };
  } catch {
    return null;
  }
}

export async function authenticateLocalRequest(headers: Headers): Promise<schema.User | undefined> {
  const cookies = cookie.parse(headers.get("cookie") || "");
  const token = cookies[LOCAL_COOKIE_NAME];
  if (!token) return undefined;
  
  const claim = await verifyLocalToken(token);
  if (!claim) return undefined;
  
  const rows = await getDb()
    .select()
    .from(schema.localUsers)
    .where(eq(schema.localUsers.id, claim.userId))
    .limit(1);
  
  const localUser = rows.at(0);
  if (!localUser) return undefined;
  
  // Map local user to User shape for unified auth
  return {
    id: localUser.id,
    unionId: `local_${localUser.id}`,
    name: localUser.displayName || localUser.username,
    email: localUser.email,
    avatar: null,
    role: localUser.role,
    createdAt: localUser.createdAt,
    updatedAt: localUser.updatedAt,
    lastSignInAt: localUser.createdAt,
  } as schema.User;
}

export { LOCAL_COOKIE_NAME };
