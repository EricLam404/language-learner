import { PrismaClient } from '@prisma/client';

declare global {
  // We declare the global `prisma` variable so TypeScript knows about it
  var prisma: PrismaClient | undefined;
}

// Use a singleton pattern for the PrismaClient
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
