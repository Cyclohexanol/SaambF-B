import { mutationField, nonNull } from 'nexus'

export const CoffeeMachineDeleteOneMutation = mutationField(
  'deleteOneCoffeeMachine',
  {
    type: 'CoffeeMachine',
    args: {
      where: nonNull('CoffeeMachineWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.coffeeMachine.delete({
        where,
        ...select,
      })
    },
  },
)
