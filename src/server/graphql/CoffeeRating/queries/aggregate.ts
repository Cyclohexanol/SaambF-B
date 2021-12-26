import { queryField, list } from 'nexus'

export const CoffeeRatingAggregateQuery = queryField('aggregateCoffeeRating', {
  type: 'AggregateCoffeeRating',
  args: {
    where: 'CoffeeRatingWhereInput',
    orderBy: list('CoffeeRatingOrderByWithRelationInput'),
    cursor: 'CoffeeRatingWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.coffeeRating.aggregate({ ...args, ...select }) as any
  },
})
