import { mutationField, nonNull } from 'nexus'

export const CoffeeRatingDeleteOneMutation = mutationField(
  'deleteOneCoffeeRating',
  {
    type: 'CoffeeRating',
    args: {
      where: nonNull('CoffeeRatingWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.coffeeRating.delete({
        where,
        ...select,
      })
    },
  },
)
