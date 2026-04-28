import { authRouter } from "./auth-router";
import { localAuthRouter } from "./local-auth-router";
import { enquiryRouter } from "./enquiry-router";
import { messageRouter } from "./message-router";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  localAuth: localAuthRouter,
  enquiry: enquiryRouter,
  message: messageRouter,
});

export type AppRouter = typeof appRouter;
