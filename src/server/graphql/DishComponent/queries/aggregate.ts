import { queryField, list } from 'nexus'

export const DishComponentAggregateQuery = queryField(
  'aggregateDishComponent',
  {
    type: 'AggregateDishComponent',
    args: {
      where: 'DishComponentWhereInput',
      orderBy: list('DishComponentOrderByWithRelationInput'),
      cursor: 'DishComponentWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.dishComponent.aggregate({ ...args, ...select }) as any
    },
  },
)
