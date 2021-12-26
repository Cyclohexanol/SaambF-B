import { queryField, nonNull, list } from 'nexus'

export const DishComponentFindManyQuery = queryField('findManyDishComponent', {
  type: nonNull(list(nonNull('DishComponent'))),
  args: {
    where: 'DishComponentWhereInput',
    orderBy: list('DishComponentOrderByWithRelationInput'),
    cursor: 'DishComponentWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('DishComponentScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dishComponent.findMany({
      ...args,
      ...select,
    })
  },
})
