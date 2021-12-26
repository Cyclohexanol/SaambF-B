import { mutationField, nonNull } from 'nexus'

export const CoffeeTypeUpsertOneMutation = mutationField(
  'upsertOneCoffeeType',
  {
    type: nonNull('CoffeeType'),
    args: {
      where: nonNull('CoffeeTypeWhereUniqueInput'),
      create: nonNull('CoffeeTypeCreateInput'),
      update: nonNull('CoffeeTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.coffeeType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
