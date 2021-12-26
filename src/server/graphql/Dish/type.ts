import { objectType } from 'nexus'

export const Dish = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Dish',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.string('name')
    t.string('url')
    t.string('description')
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
    t.list.field('dishComponents', {
      type: 'DishComponent',
      args: {
        where: 'DishComponentWhereInput',
        orderBy: 'DishComponentOrderByWithRelationInput',
        cursor: 'DishComponentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'DishComponentScalarFieldEnum',
      },
      resolve(root: any) {
        return root.dishComponents
      },
    })
    t.field('_count', {
      type: 'DishCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
