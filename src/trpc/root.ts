import { router } from './trpc';
import { stockRouter } from './routers/stock';

export const appRouter = router({
  stock: stockRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;
