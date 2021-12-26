import { queryField, nonNull, list } from 'nexus'

export const DishFindCountQuery = queryField('findManyDishCount', {
  type: nonNull('Int'),
  args: {
    where: 'DishWhereInput',
    orderBy: list('DishOrderByWithRelationInput'),
    cursor: 'DishWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('DishScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.dish.count(args as any)
  },
})
