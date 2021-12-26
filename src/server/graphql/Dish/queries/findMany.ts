import { queryField, nonNull, list } from 'nexus'

export const DishFindManyQuery = queryField('findManyDish', {
  type: nonNull(list(nonNull('Dish'))),
  args: {
    where: 'DishWhereInput',
    orderBy: list('DishOrderByWithRelationInput'),
    cursor: 'DishWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('DishScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dish.findMany({
      ...args,
      ...select,
    })
  },
})
