import { mutationField, nonNull } from 'nexus'

export const CoffeeMachineDeleteManyMutation = mutationField(
  'deleteManyCoffeeMachine',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CoffeeMachineWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.coffeeMachine.deleteMany({ where } as any)
    },
  },
)
