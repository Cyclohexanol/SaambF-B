import { mutationField, nonNull } from 'nexus'

export const DishUpdateOneMutation = mutationField('updateOneDish', {
  type: nonNull('Dish'),
  args: {
    data: nonNull('DishUpdateInput'),
    where: nonNull('DishWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.dish.update({
      where,
      data,
      ...select,
    })
  },
})
