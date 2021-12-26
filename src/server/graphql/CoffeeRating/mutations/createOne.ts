import { mutationField, nonNull } from 'nexus'

export const CoffeeRatingCreateOneMutation = mutationField(
  'createOneCoffeeRating',
  {
    type: nonNull('CoffeeRating'),
    args: {
      data: nonNull('CoffeeRatingCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.coffeeRating.create({
        data,
        ...select,
      })
    },
  },
)
