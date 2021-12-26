import { mutationField, nonNull } from 'nexus'

export const DishUpdateManyMutation = mutationField('updateManyDish', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('DishUpdateManyMutationInput'),
    where: 'DishWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.dish.updateMany(args as any)
  },
})
