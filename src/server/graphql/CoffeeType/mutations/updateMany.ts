import { mutationField, nonNull } from 'nexus'

export const CoffeeTypeUpdateManyMutation = mutationField(
  'updateManyCoffeeType',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('CoffeeTypeUpdateManyMutationInput'),
      where: 'CoffeeTypeWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.coffeeType.updateMany(args as any)
    },
  },
)
