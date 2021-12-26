import { mutationField, nonNull } from 'nexus'

export const MealUpsertOneMutation = mutationField('upsertOneMeal', {
  type: nonNull('Meal'),
  args: {
    where: nonNull('MealWhereUniqueInput'),
    create: nonNull('MealCreateInput'),
    update: nonNull('MealUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.meal.upsert({
      ...args,
      ...select,
    })
  },
})
