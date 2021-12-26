import { queryField, nonNull } from 'nexus'

export const CoffeeRatingFindUniqueQuery = queryField(
  'findUniqueCoffeeRating',
  {
    type: 'CoffeeRating',
    args: {
      where: nonNull('CoffeeRatingWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.coffeeRating.findUnique({
        where,
        ...select,
      })
    },
  },
)
