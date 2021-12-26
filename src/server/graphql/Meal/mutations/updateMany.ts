import { mutationField, nonNull } from 'nexus'

export const MealUpdateManyMutation = mutationField('updateManyMeal', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('MealUpdateManyMutationInput'),
    where: 'MealWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.meal.updateMany(args as any)
  },
})
