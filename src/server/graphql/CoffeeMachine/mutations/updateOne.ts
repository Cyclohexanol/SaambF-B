import { mutationField, nonNull } from 'nexus'

export const CoffeeMachineUpdateOneMutation = mutationField(
  'updateOneCoffeeMachine',
  {
    type: nonNull('CoffeeMachine'),
    args: {
      data: nonNull('CoffeeMachineUpdateInput'),
      where: nonNull('CoffeeMachineWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.coffeeMachine.update({
        where,
        data,
        ...select,
      })
    },
  },
)
