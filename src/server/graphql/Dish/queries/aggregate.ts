import { queryField, list } from 'nexus'

export const DishAggregateQuery = queryField('aggregateDish', {
  type: 'AggregateDish',
  args: {
    where: 'DishWhereInput',
    orderBy: list('DishOrderByWithRelationInput'),
    cursor: 'DishWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dish.aggregate({ ...args, ...select }) as any
  },
})
