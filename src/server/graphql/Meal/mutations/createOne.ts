import { mutationField, nonNull } from 'nexus'

export const MealCreateOneMutation = mutationField('createOneMeal', {
  type: nonNull('Meal'),
  args: {
    data: nonNull('MealCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.meal.create({
      data,
      ...select,
    })
  },
})
