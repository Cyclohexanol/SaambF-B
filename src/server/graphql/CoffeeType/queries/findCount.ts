import { queryField, nonNull, list } from 'nexus'

export const CoffeeTypeFindCountQuery = queryField('findManyCoffeeTypeCount', {
  type: nonNull('Int'),
  args: {
    where: 'CoffeeTypeWhereInput',
    orderBy: list('CoffeeTypeOrderByWithRelationInput'),
    cursor: 'CoffeeTypeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CoffeeTypeScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.coffeeType.count(args as any)
  },
})
