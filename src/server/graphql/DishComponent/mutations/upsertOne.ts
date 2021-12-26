import { mutationField, nonNull } from 'nexus'

export const DishComponentUpsertOneMutation = mutationField(
  'upsertOneDishComponent',
  {
    type: nonNull('DishComponent'),
    args: {
      where: nonNull('DishComponentWhereUniqueInput'),
      create: nonNull('DishComponentCreateInput'),
      update: nonNull('DishComponentUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.dishComponent.upsert({
        ...args,
        ...select,
      })
    },
  },
)
