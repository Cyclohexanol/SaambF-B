import { objectType } from 'nexus'

export const CoffeeType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'CoffeeType',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.string('name')
    t.string('description')
    t.list.field('coffeeRatings', {
      type: 'CoffeeRating',
      args: {
        where: 'CoffeeRatingWhereInput',
        orderBy: 'CoffeeRatingOrderByWithRelationInput',
        cursor: 'CoffeeRatingWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CoffeeRatingScalarFieldEnum',
      },
      resolve(root: any) {
        return root.coffeeRatings
      },
    })
    t.field('_count', {
      type: 'CoffeeTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
