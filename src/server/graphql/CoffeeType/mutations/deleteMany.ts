import { mutationField, nonNull } from 'nexus'

export const CoffeeTypeDeleteManyMutation = mutationField(
  'deleteManyCoffeeType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CoffeeTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.coffeeType.deleteMany({ where } as any)
    },
  },
)
