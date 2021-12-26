import { queryField, nonNull, list } from 'nexus'

export const CoffeeRatingFindManyQuery = queryField('findManyCoffeeRating', {
  type: nonNull(list(nonNull('CoffeeRating'))),
  args: {
    where: 'CoffeeRatingWhereInput',
    orderBy: list('CoffeeRatingOrderByWithRelationInput'),
    cursor: 'CoffeeRatingWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CoffeeRatingScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.coffeeRating.findMany({
      ...args,
      ...select,
    })
  },
})
