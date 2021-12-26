import { queryField, nonNull, list } from 'nexus'

export const CoffeeTypeFindManyQuery = queryField('findManyCoffeeType', {
  type: nonNull(list(nonNull('CoffeeType'))),
  args: {
    where: 'CoffeeTypeWhereInput',
    orderBy: list('CoffeeTypeOrderByWithRelationInput'),
    cursor: 'CoffeeTypeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CoffeeTypeScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.coffeeType.findMany({
      ...args,
      ...select,
    })
  },
})
