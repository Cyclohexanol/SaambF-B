import { mutationField, nonNull } from 'nexus'

export const DishComponentDeleteOneMutation = mutationField(
  'deleteOneDishComponent',
  {
    type: 'DishComponent',
    args: {
      where: nonNull('DishComponentWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.dishComponent.delete({
        where,
        ...select,
      })
    },
  },
)
