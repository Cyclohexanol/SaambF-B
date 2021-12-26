import { queryField, list } from 'nexus'

export const MealAggregateQuery = queryField('aggregateMeal', {
  type: 'AggregateMeal',
  args: {
    where: 'MealWhereInput',
    orderBy: list('MealOrderByWithRelationInput'),
    cursor: 'MealWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.meal.aggregate({ ...args, ...select }) as any
  },
})
