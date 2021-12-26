import { mutationField, nonNull } from 'nexus'

export const DishUpsertOneMutation = mutationField('upsertOneDish', {
  type: nonNull('Dish'),
  args: {
    where: nonNull('DishWhereUniqueInput'),
    create: nonNull('DishCreateInput'),
    update: nonNull('DishUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dish.upsert({
      ...args,
      ...select,
    })
  },
})
