import { queryField, list } from 'nexus'

export const CoffeeMachineAggregateQuery = queryField(
  'aggregateCoffeeMachine',
  {
    type: 'AggregateCoffeeMachine',
    args: {
      where: 'CoffeeMachineWhereInput',
      orderBy: list('CoffeeMachineOrderByWithRelationInput'),
      cursor: 'CoffeeMachineWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.coffeeMachine.aggregate({ ...args, ...select }) as any
    },
  },
)
