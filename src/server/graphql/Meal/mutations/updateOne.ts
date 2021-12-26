import { mutationField, nonNull } from 'nexus'

export const MealUpdateOneMutation = mutationField('updateOneMeal', {
  type: nonNull('Meal'),
  args: {
    data: nonNull('MealUpdateInput'),
    where: nonNull('MealWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.meal.update({
      where,
      data,
      ...select,
    })
  },
})
