import { mutationField, nonNull } from 'nexus'

export const CoffeeRatingUpdateManyMutation = mutationField(
  'updateManyCoffeeRating',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('CoffeeRatingUpdateManyMutationInput'),
      where: 'CoffeeRatingWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.coffeeRating.updateMany(args as any)
    },
  },
)
