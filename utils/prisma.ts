import { PrismaClient } from "@prisma/client";

declare const global: Global & { prisma?: PrismaClient };

// Prevent multiple instances of Prisma Client in development
export const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") global.prisma = prisma;
