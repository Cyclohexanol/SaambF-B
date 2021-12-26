import { queryField, nonNull, list } from 'nexus'

export const CoffeeRatingFindCountQuery = queryField(
  'findManyCoffeeRatingCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'CoffeeRatingWhereInput',
      orderBy: list('CoffeeRatingOrderByWithRelationInput'),
      cursor: 'CoffeeRatingWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('CoffeeRatingScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.coffeeRating.count(args as any)
    },
  },
)
