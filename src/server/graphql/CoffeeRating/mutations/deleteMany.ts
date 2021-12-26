import { mutationField, nonNull } from 'nexus'

export const CoffeeRatingDeleteManyMutation = mutationField(
  'deleteManyCoffeeRating',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CoffeeRatingWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.coffeeRating.deleteMany({ where } as any)
    },
  },
)
