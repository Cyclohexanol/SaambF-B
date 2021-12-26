import { mutationField, nonNull } from 'nexus'

export const CoffeeTypeUpdateOneMutation = mutationField(
  'updateOneCoffeeType',
  {
    type: nonNull('CoffeeType'),
    args: {
      data: nonNull('CoffeeTypeUpdateInput'),
      where: nonNull('CoffeeTypeWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.coffeeType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
