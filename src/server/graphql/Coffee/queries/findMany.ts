import { queryField, nonNull, list } from 'nexus'

export const CoffeeFindManyQuery = queryField('findManyCoffee', {
  type: nonNull(list(nonNull('Coffee'))),
  args: {
    where: 'CoffeeWhereInput',
    orderBy: list('CoffeeOrderByWithRelationInput'),
    cursor: 'CoffeeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CoffeeScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.coffee.findMany({
      ...args,
      ...select,
    })
  },
})
