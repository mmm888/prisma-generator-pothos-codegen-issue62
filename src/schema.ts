import { builder, prisma } from './builder'

builder.prismaObject('User', {
    fields: (t) => ({
      id: t.exposeID('id'),
      name: t.exposeString('name'),
    })
})

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