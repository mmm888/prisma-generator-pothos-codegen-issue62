module.exports = {
  crud: {
    outputDir: './src/__generated__/',
    prismaCaller: 'prisma',
    inputsImporter: "import * as Inputs from '@/__generated__/inputs'",
    deleteOutputDirBeforeGenerate: true,
    prismaImporter: `import { Prisma } from '@prisma/client';`,
    resolverImports: `\nimport { prisma } from '@/builder';`,
  },
  inputs: {
    prismaImporter: `import { Prisma } from '@prisma/client';`,
    outputFilePath: './src/__generated__/inputs.ts',
    simple: true,
  },
  global: {
    builderLocation: "./src/builder",
  },
};