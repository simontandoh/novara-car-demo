import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import type { User } from "@db/schema";
import { authenticateRequest } from "./kimi/auth";
import { authenticateLocalRequest } from "./local-auth";

export type TrpcContext = {
  req: Request;
  resHeaders: Headers;
  user?: User;
};

export async function createContext(
  opts: FetchCreateContextFnOptions,
): Promise<TrpcContext> {
  const ctx: TrpcContext = { req: opts.req, resHeaders: opts.resHeaders };
  
  // Try OAuth first
  try {
    ctx.user = await authenticateRequest(opts.req.headers);
    return ctx;
  } catch {
    // OAuth auth failed, try local auth
  }
  
  // Try local auth
  try {
    ctx.user = await authenticateLocalRequest(opts.req.headers);
  } catch {
    // Local auth also failed — user is anonymous
  }
  
  return ctx;
}
