import { mutationField, nonNull } from 'nexus'

export const CoffeeMachineUpsertOneMutation = mutationField(
  'upsertOneCoffeeMachine',
  {
    type: nonNull('CoffeeMachine'),
    args: {
      where: nonNull('CoffeeMachineWhereUniqueInput'),
      create: nonNull('CoffeeMachineCreateInput'),
      update: nonNull('CoffeeMachineUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.coffeeMachine.upsert({
        ...args,
        ...select,
      })
    },
  },
)
