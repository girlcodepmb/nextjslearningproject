import { inferAsyncReturnType } from '@trpc/server';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';

export async function createTRPCContext(opts: CreateNextContextOptions) {
  return {};
}

export type TRPCContext = inferAsyncReturnType<typeof createTRPCContext>;
