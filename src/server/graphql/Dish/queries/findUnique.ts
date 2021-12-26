import { queryField, nonNull } from 'nexus'

export const DishFindUniqueQuery = queryField('findUniqueDish', {
  type: 'Dish',
  args: {
    where: nonNull('DishWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.dish.findUnique({
      where,
      ...select,
    })
  },
})
