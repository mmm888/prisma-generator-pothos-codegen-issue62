import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma';
import { PrismaClient } from '@prisma/client';
import type PrismaTypes from './generated/objects';

export const prisma = new PrismaClient({});

export const builder = new SchemaBuilder<{
    PrismaTypes: PrismaTypes;
  }>({
    plugins: [PrismaPlugin],
    prisma: {
      client: prisma,
    },
  }
);