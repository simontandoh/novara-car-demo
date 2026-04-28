import { z } from "zod";
import { desc, eq } from "drizzle-orm";
import * as schema from "@db/schema";
import { getDb } from "./queries/connection";
import { createRouter, publicQuery, adminQuery } from "./middleware";

export const enquiryRouter = createRouter({
  create: publicQuery
    .input(
      z.object({
        name: z.string().min(1).max(255),
        email: z.string().email(),
        checkIn: z.string().max(50).optional(),
        checkOut: z.string().max(50).optional(),
        guests: z.number().int().min(1).max(50).optional(),
        message: z.string().max(5000).optional(),
      })
    )
    .mutation(async ({ input }) => {
      const result = await getDb()
        .insert(schema.enquiries)
        .values({
          name: input.name,
          email: input.email,
          checkIn: input.checkIn || null,
          checkOut: input.checkOut || null,
          guests: input.guests || null,
          message: input.message || null,
        });
      return { success: true, id: Number(result[0].insertId) };
    }),

  list: adminQuery.query(async () => {
    const rows = await getDb()
      .select()
      .from(schema.enquiries)
      .orderBy(desc(schema.enquiries.createdAt));
    return rows;
  }),

  updateStatus: adminQuery
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["new", "contacted", "confirmed", "declined"]),
      })
    )
    .mutation(async ({ input }) => {
      await getDb()
        .update(schema.enquiries)
        .set({ status: input.status })
        .where(eq(schema.enquiries.id, input.id));
      return { success: true };
    }),

  delete: adminQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      await getDb()
        .delete(schema.enquiries)
        .where(eq(schema.enquiries.id, input.id));
      return { success: true };
    }),
});
