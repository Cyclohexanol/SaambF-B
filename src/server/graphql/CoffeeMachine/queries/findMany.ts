import { queryField, nonNull, list } from 'nexus'

export const CoffeeMachineFindManyQuery = queryField('findManyCoffeeMachine', {
  type: nonNull(list(nonNull('CoffeeMachine'))),
  args: {
    where: 'CoffeeMachineWhereInput',
    orderBy: list('CoffeeMachineOrderByWithRelationInput'),
    cursor: 'CoffeeMachineWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CoffeeMachineScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.coffeeMachine.findMany({
      ...args,
      ...select,
    })
  },
})
