import { queryField, nonNull, list } from 'nexus'

export const CoffeeFindCountQuery = queryField('findManyCoffeeCount', {
  type: nonNull('Int'),
  args: {
    where: 'CoffeeWhereInput',
    orderBy: list('CoffeeOrderByWithRelationInput'),
    cursor: 'CoffeeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CoffeeScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.coffee.count(args as any)
  },
})
