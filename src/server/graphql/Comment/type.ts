import { objectType } from 'nexus'

export const Comment = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Comment',
  definition(t) {
    t.int('id')
    t.nullable.string('content')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.int('rating')
    t.nullable.field('meal', {
      type: 'Meal',
      resolve(root: any) {
        return root.meal
      },
    })
    t.nullable.int('mealId')
    t.nullable.field('guest', {
      type: 'Guest',
      resolve(root: any) {
        return root.guest
      },
    })
    t.nullable.int('guestId')
    t.nullable.field('dish', {
      type: 'Dish',
      resolve(root: any) {
        return root.dish
      },
    })
    t.nullable.int('dishId')
  },
})
