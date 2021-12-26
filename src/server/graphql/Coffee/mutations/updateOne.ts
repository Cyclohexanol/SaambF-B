import { mutationField, nonNull } from 'nexus'

export const CoffeeUpdateOneMutation = mutationField('updateOneCoffee', {
  type: nonNull('Coffee'),
  args: {
    data: nonNull('CoffeeUpdateInput'),
    where: nonNull('CoffeeWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.coffee.update({
      where,
      data,
      ...select,
    })
  },
})
