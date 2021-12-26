import { mutationField, nonNull } from 'nexus'

export const CoffeeRatingUpsertOneMutation = mutationField(
  'upsertOneCoffeeRating',
  {
    type: nonNull('CoffeeRating'),
    args: {
      where: nonNull('CoffeeRatingWhereUniqueInput'),
      create: nonNull('CoffeeRatingCreateInput'),
      update: nonNull('CoffeeRatingUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.coffeeRating.upsert({
        ...args,
        ...select,
      })
    },
  },
)
