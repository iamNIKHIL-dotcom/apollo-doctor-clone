// lib/prisma.ts

import { PrismaClient } from '@prisma/client';

declare global {
  // allow global `var` to avoid Hot Module Replacement issue
  // in development
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;



//npx prisma generate
//npx prisma migrate
