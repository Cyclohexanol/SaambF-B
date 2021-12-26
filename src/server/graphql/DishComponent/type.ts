import { objectType } from 'nexus'

export const DishComponent = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'DishComponent',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.string('name')
    t.string('description')
    t.nullable.string('recipes')
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
      type: 'DishComponentCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
