import { queryField, nonNull } from 'nexus'

export const CoffeeTypeFindUniqueQuery = queryField('findUniqueCoffeeType', {
  type: 'CoffeeType',
  args: {
    where: nonNull('CoffeeTypeWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.coffeeType.findUnique({
      where,
      ...select,
    })
  },
})
