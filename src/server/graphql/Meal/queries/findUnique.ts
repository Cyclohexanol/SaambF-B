import { queryField, nonNull } from 'nexus'

export const MealFindUniqueQuery = queryField('findUniqueMeal', {
  type: 'Meal',
  args: {
    where: nonNull('MealWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.meal.findUnique({
      where,
      ...select,
    })
  },
})
