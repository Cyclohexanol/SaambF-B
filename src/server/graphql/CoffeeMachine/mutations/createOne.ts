import { mutationField, nonNull } from 'nexus'

export const CoffeeMachineCreateOneMutation = mutationField(
  'createOneCoffeeMachine',
  {
    type: nonNull('CoffeeMachine'),
    args: {
      data: nonNull('CoffeeMachineCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.coffeeMachine.create({
        data,
        ...select,
      })
    },
  },
)
