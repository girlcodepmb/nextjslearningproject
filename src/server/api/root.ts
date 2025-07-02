import { createTRPCRouter } from "~/server/api/trpc";
import { stockRouter } from "~/server/api/routers/stock";

export const appRouter = createTRPCRouter({
  stock: stockRouter,
});

export type AppRouter = typeof appRouter;