import { mutationField, nonNull } from 'nexus'

export const CoffeeDeleteManyMutation = mutationField('deleteManyCoffee', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CoffeeWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.coffee.deleteMany({ where } as any)
  },
})
