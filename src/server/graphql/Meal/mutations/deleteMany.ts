import { mutationField, nonNull } from 'nexus'

export const MealDeleteManyMutation = mutationField('deleteManyMeal', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'MealWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.meal.deleteMany({ where } as any)
  },
})
