import { queryField, nonNull } from 'nexus'

export const DishComponentFindUniqueQuery = queryField(
  'findUniqueDishComponent',
  {
    type: 'DishComponent',
    args: {
      where: nonNull('DishComponentWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.dishComponent.findUnique({
        where,
        ...select,
      })
    },
  },
)
