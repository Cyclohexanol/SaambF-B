import { queryField, list } from 'nexus'

export const CoffeeAggregateQuery = queryField('aggregateCoffee', {
  type: 'AggregateCoffee',
  args: {
    where: 'CoffeeWhereInput',
    orderBy: list('CoffeeOrderByWithRelationInput'),
    cursor: 'CoffeeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.coffee.aggregate({ ...args, ...select }) as any
  },
})
