import { mutationField, nonNull } from 'nexus'

export const MealDeleteOneMutation = mutationField('deleteOneMeal', {
  type: 'Meal',
  args: {
    where: nonNull('MealWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.meal.delete({
      where,
      ...select,
    })
  },
})
