import { queryField, list } from 'nexus'

export const CoffeeRatingFindFirstQuery = queryField('findFirstCoffeeRating', {
  type: 'CoffeeRating',
  args: {
    where: 'CoffeeRatingWhereInput',
    orderBy: list('CoffeeRatingOrderByWithRelationInput'),
    cursor: 'CoffeeRatingWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CoffeeRatingScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.coffeeRating.findFirst({
      ...args,
      ...select,
    })
  },
})
