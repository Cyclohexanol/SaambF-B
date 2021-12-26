import { queryField, list } from 'nexus'

export const DishComponentFindFirstQuery = queryField(
  'findFirstDishComponent',
  {
    type: 'DishComponent',
    args: {
      where: 'DishComponentWhereInput',
      orderBy: list('DishComponentOrderByWithRelationInput'),
      cursor: 'DishComponentWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('DishComponentScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.dishComponent.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
