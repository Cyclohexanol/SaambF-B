import { queryField, list } from 'nexus'

export const CoffeeTypeFindFirstQuery = queryField('findFirstCoffeeType', {
  type: 'CoffeeType',
  args: {
    where: 'CoffeeTypeWhereInput',
    orderBy: list('CoffeeTypeOrderByWithRelationInput'),
    cursor: 'CoffeeTypeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CoffeeTypeScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.coffeeType.findFirst({
      ...args,
      ...select,
    })
  },
})
