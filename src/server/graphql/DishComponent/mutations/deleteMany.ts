import { mutationField, nonNull } from 'nexus'

export const DishComponentDeleteManyMutation = mutationField(
  'deleteManyDishComponent',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'DishComponentWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.dishComponent.deleteMany({ where } as any)
    },
  },
)
