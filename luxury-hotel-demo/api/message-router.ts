import { z } from "zod";
import { desc, eq } from "drizzle-orm";
import * as schema from "@db/schema";
import { getDb } from "./queries/connection";
import { createRouter, publicQuery, adminQuery } from "./middleware";

export const messageRouter = createRouter({
  create: publicQuery
    .input(
      z.object({
        name: z.string().min(1).max(255),
        email: z.string().email(),
        content: z.string().min(1).max(5000),
      })
    )
    .mutation(async ({ input }) => {
      const result = await getDb()
        .insert(schema.messages)
        .values({
          name: input.name,
          email: input.email,
          content: input.content,
        });
      return { success: true, id: Number(result[0].insertId) };
    }),

  list: publicQuery.query(async () => {
    const rows = await getDb()
      .select()
      .from(schema.messages)
      .orderBy(desc(schema.messages.createdAt))
      .limit(100);
    return rows;
  }),

  delete: adminQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      await getDb()
        .delete(schema.messages)
        .where(eq(schema.messages.id, input.id));
      return { success: true };
    }),
});
