import { mutationField, nonNull } from 'nexus'

export const CoffeeRatingUpdateOneMutation = mutationField(
  'updateOneCoffeeRating',
  {
    type: nonNull('CoffeeRating'),
    args: {
      data: nonNull('CoffeeRatingUpdateInput'),
      where: nonNull('CoffeeRatingWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.coffeeRating.update({
        where,
        data,
        ...select,
      })
    },
  },
)
