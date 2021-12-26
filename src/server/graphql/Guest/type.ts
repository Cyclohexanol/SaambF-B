import { objectType } from 'nexus'

export const Guest = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Guest',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.string('email')
    t.nullable.string('name')
    t.string('password')
    t.list.field('meals', {
      type: 'Meal',
      args: {
        where: 'MealWhereInput',
        orderBy: 'MealOrderByWithRelationInput',
        cursor: 'MealWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'MealScalarFieldEnum',
      },
      resolve(root: any) {
        return root.meals
      },
    })
    t.list.field('comments', {
      type: 'Comment',
      args: {
        where: 'CommentWhereInput',
        orderBy: 'CommentOrderByWithRelationInput',
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CommentScalarFieldEnum',
      },
      resolve(root: any) {
        return root.comments
      },
    })
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
      type: 'GuestCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
