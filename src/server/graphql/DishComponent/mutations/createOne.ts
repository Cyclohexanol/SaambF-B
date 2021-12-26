import { mutationField, nonNull } from 'nexus'

export const DishComponentCreateOneMutation = mutationField(
  'createOneDishComponent',
  {
    type: nonNull('DishComponent'),
    args: {
      data: nonNull('DishComponentCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.dishComponent.create({
        data,
        ...select,
      })
    },
  },
)
