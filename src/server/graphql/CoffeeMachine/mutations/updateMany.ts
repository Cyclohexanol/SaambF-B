import { mutationField, nonNull } from 'nexus'

export const CoffeeMachineUpdateManyMutation = mutationField(
  'updateManyCoffeeMachine',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('CoffeeMachineUpdateManyMutationInput'),
      where: 'CoffeeMachineWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.coffeeMachine.updateMany(args as any)
    },
  },
)
