import { mutationField, nonNull } from 'nexus'

export const CoffeeUpdateManyMutation = mutationField('updateManyCoffee', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('CoffeeUpdateManyMutationInput'),
    where: 'CoffeeWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.coffee.updateMany(args as any)
  },
})
