import { queryField, nonNull } from 'nexus'

export const CoffeeFindUniqueQuery = queryField('findUniqueCoffee', {
  type: 'Coffee',
  args: {
    where: nonNull('CoffeeWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.coffee.findUnique({
      where,
      ...select,
    })
  },
})
