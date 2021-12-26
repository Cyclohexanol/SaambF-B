import { queryField, list } from 'nexus'

export const CoffeeTypeAggregateQuery = queryField('aggregateCoffeeType', {
  type: 'AggregateCoffeeType',
  args: {
    where: 'CoffeeTypeWhereInput',
    orderBy: list('CoffeeTypeOrderByWithRelationInput'),
    cursor: 'CoffeeTypeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.coffeeType.aggregate({ ...args, ...select }) as any
  },
})
