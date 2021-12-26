import { mutationField, nonNull } from 'nexus'

export const DishDeleteManyMutation = mutationField('deleteManyDish', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'DishWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.dish.deleteMany({ where } as any)
  },
})
