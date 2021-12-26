import { queryField, nonNull, list } from 'nexus'

export const CoffeeMachineFindCountQuery = queryField(
  'findManyCoffeeMachineCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'CoffeeMachineWhereInput',
      orderBy: list('CoffeeMachineOrderByWithRelationInput'),
      cursor: 'CoffeeMachineWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('CoffeeMachineScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.coffeeMachine.count(args as any)
    },
  },
)
