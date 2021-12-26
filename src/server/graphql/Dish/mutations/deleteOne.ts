import { mutationField, nonNull } from 'nexus'

export const DishDeleteOneMutation = mutationField('deleteOneDish', {
  type: 'Dish',
  args: {
    where: nonNull('DishWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.dish.delete({
      where,
      ...select,
    })
  },
})
