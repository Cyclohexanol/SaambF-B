import { mutationField, nonNull } from 'nexus'

export const CoffeeDeleteOneMutation = mutationField('deleteOneCoffee', {
  type: 'Coffee',
  args: {
    where: nonNull('CoffeeWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.coffee.delete({
      where,
      ...select,
    })
  },
})
