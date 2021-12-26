import { queryField, list } from 'nexus'

export const DishFindFirstQuery = queryField('findFirstDish', {
  type: 'Dish',
  args: {
    where: 'DishWhereInput',
    orderBy: list('DishOrderByWithRelationInput'),
    cursor: 'DishWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('DishScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dish.findFirst({
      ...args,
      ...select,
    })
  },
})
