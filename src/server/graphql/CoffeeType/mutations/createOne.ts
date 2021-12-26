import { mutationField, nonNull } from 'nexus'

export const CoffeeTypeCreateOneMutation = mutationField(
  'createOneCoffeeType',
  {
    type: nonNull('CoffeeType'),
    args: {
      data: nonNull('CoffeeTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.coffeeType.create({
        data,
        ...select,
      })
    },
  },
)
