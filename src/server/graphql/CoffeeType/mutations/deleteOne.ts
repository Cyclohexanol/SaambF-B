import { mutationField, nonNull } from 'nexus'

export const CoffeeTypeDeleteOneMutation = mutationField(
  'deleteOneCoffeeType',
  {
    type: 'CoffeeType',
    args: {
      where: nonNull('CoffeeTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.coffeeType.delete({
        where,
        ...select,
      })
    },
  },
)
