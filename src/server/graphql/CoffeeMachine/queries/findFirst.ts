import { queryField, list } from 'nexus'

export const CoffeeMachineFindFirstQuery = queryField(
  'findFirstCoffeeMachine',
  {
    type: 'CoffeeMachine',
    args: {
      where: 'CoffeeMachineWhereInput',
      orderBy: list('CoffeeMachineOrderByWithRelationInput'),
      cursor: 'CoffeeMachineWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('CoffeeMachineScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.coffeeMachine.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
