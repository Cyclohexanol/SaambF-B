import { queryField, nonNull, list } from 'nexus'

export const DishComponentFindCountQuery = queryField(
  'findManyDishComponentCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'DishComponentWhereInput',
      orderBy: list('DishComponentOrderByWithRelationInput'),
      cursor: 'DishComponentWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('DishComponentScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.dishComponent.count(args as any)
    },
  },
)
