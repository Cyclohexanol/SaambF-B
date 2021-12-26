import { queryField, nonNull, list } from 'nexus'

export const MealFindCountQuery = queryField('findManyMealCount', {
  type: nonNull('Int'),
  args: {
    where: 'MealWhereInput',
    orderBy: list('MealOrderByWithRelationInput'),
    cursor: 'MealWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('MealScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.meal.count(args as any)
  },
})
