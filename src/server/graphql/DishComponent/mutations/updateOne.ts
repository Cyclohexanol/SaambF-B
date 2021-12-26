import { mutationField, nonNull } from 'nexus'

export const DishComponentUpdateOneMutation = mutationField(
  'updateOneDishComponent',
  {
    type: nonNull('DishComponent'),
    args: {
      data: nonNull('DishComponentUpdateInput'),
      where: nonNull('DishComponentWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.dishComponent.update({
        where,
        data,
        ...select,
      })
    },
  },
)
