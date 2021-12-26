import { queryField, nonNull } from 'nexus'

export const CoffeeMachineFindUniqueQuery = queryField(
  'findUniqueCoffeeMachine',
  {
    type: 'CoffeeMachine',
    args: {
      where: nonNull('CoffeeMachineWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.coffeeMachine.findUnique({
        where,
        ...select,
      })
    },
  },
)
