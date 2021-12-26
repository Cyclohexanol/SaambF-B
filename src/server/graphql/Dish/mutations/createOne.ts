import { mutationField, nonNull } from 'nexus'

export const DishCreateOneMutation = mutationField('createOneDish', {
  type: nonNull('Dish'),
  args: {
    data: nonNull('DishCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.dish.create({
      data,
      ...select,
    })
  },
})
