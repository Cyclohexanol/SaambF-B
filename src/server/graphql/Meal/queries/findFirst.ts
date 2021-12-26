import { queryField, list } from 'nexus'

export const MealFindFirstQuery = queryField('findFirstMeal', {
  type: 'Meal',
  args: {
    where: 'MealWhereInput',
    orderBy: list('MealOrderByWithRelationInput'),
    cursor: 'MealWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('MealScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.meal.findFirst({
      ...args,
      ...select,
    })
  },
})
