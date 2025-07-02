import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@/trpc/root'; // or adjust this path to where appRouter is
import { createTRPCContext } from '@/trpc/context'; // same here

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
});
