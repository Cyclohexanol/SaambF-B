import { mutationField, nonNull } from 'nexus'

export const DishComponentUpdateManyMutation = mutationField(
  'updateManyDishComponent',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('DishComponentUpdateManyMutationInput'),
      where: 'DishComponentWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.dishComponent.updateMany(args as any)
    },
  },
)
