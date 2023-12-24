import { generateAllCrud } from './__generated__/autocrud'
import { builder, prisma } from './builder'

generateAllCrud()

builder.queryType({})
builder.mutationType({})

builder.queryType({
    fields: (t) => ({
        userFindMany: t.prismaField({
            type: 'User',
            resolve: async (_query, _root, _args, _ctx, _info) => {
                return prisma.user.findFirstOrThrow()
            }
        })
    }),
})

export const schema = builder.toSchema({})