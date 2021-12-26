import { mutationField, nonNull } from 'nexus'

export const CoffeeUpsertOneMutation = mutationField('upsertOneCoffee', {
  type: nonNull('Coffee'),
  args: {
    where: nonNull('CoffeeWhereUniqueInput'),
    create: nonNull('CoffeeCreateInput'),
    update: nonNull('CoffeeUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.coffee.upsert({
      ...args,
      ...select,
    })
  },
})
