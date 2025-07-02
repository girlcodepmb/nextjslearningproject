import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@/server/api/root'; // Make sure this points to your root router

export const api = createTRPCReact<AppRouter>();
