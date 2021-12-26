import { objectType } from 'nexus'

export const Meal = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Meal',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.string('name')
    t.string('description')
    t.field('date', { type: 'DateTime' })
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
    t.list.field('guests', {
      type: 'Guest',
      args: {
        where: 'GuestWhereInput',
        orderBy: 'GuestOrderByWithRelationInput',
        cursor: 'GuestWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'GuestScalarFieldEnum',
      },
      resolve(root: any) {
        return root.guests
      },
    })
    t.list.field('dishes', {
      type: 'Dish',
      args: {
        where: 'DishWhereInput',
        orderBy: 'DishOrderByWithRelationInput',
        cursor: 'DishWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'DishScalarFieldEnum',
      },
      resolve(root: any) {
        return root.dishes
      },
    })
    t.field('_count', {
      type: 'MealCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
