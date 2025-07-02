import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "@/server/db";

export const stockRouter = createTRPCRouter({
  // Get all stock items
  getAll: publicProcedure.query(async () => {
    return await prisma.stock.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  // Create new stock item
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        quantity: z.number().int(),
        costPrice: z.number(),
        sellPrice: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.stock.create({
        data: input,
      });
    }),

  // Calculate expected revenue
  getRevenue: publicProcedure.query(async () => {
    const allStock = await prisma.stock.findMany();
    return allStock.reduce((total, item) => {
      return total + item.quantity * item.sellPrice;
    }, 0);
  }),
});
