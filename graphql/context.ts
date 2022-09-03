import { PrismaClient } from "@prisma/client";
import { prisma } from "utils/prisma";

export type Context = {
  prisma: PrismaClient;
};

export async function createContext(_req, _res): Promise<Context> {
  return {
    prisma,
  };
}
