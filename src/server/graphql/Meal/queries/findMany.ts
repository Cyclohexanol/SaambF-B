import { queryField, nonNull, list } from 'nexus'

export const MealFindManyQuery = queryField('findManyMeal', {
  type: nonNull(list(nonNull('Meal'))),
  args: {
    where: 'MealWhereInput',
    orderBy: list('MealOrderByWithRelationInput'),
    cursor: 'MealWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('MealScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.meal.findMany({
      ...args,
      ...select,
    })
  },
})
