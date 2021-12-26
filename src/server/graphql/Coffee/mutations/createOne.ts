import { mutationField, nonNull } from 'nexus'

export const CoffeeCreateOneMutation = mutationField('createOneCoffee', {
  type: nonNull('Coffee'),
  args: {
    data: nonNull('CoffeeCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.coffee.create({
      data,
      ...select,
    })
  },
})
