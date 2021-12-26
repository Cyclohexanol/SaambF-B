import { objectType } from 'nexus'

export const CoffeeRating = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'CoffeeRating',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.int('rating')
    t.nullable.field('coffeeType', {
      type: 'CoffeeType',
      resolve(root: any) {
        return root.coffeeType
      },
    })
    t.nullable.int('coffeeTypeId')
    t.nullable.field('machine', {
      type: 'CoffeeMachine',
      resolve(root: any) {
        return root.machine
      },
    })
    t.nullable.int('machineId')
    t.field('coffee', {
      type: 'Coffee',
      resolve(root: any) {
        return root.coffee
      },
    })
    t.int('coffeeId')
    t.nullable.field('guest', {
      type: 'Guest',
      resolve(root: any) {
        return root.guest
      },
    })
    t.nullable.int('guestId')
  },
})
