import { queryField, list } from 'nexus'

export const CoffeeFindFirstQuery = queryField('findFirstCoffee', {
  type: 'Coffee',
  args: {
    where: 'CoffeeWhereInput',
    orderBy: list('CoffeeOrderByWithRelationInput'),
    cursor: 'CoffeeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CoffeeScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.coffee.findFirst({
      ...args,
      ...select,
    })
  },
})
