import { mutationField, nonNull } from 'nexus'

export const GuestUpsertOneMutation = mutationField('upsertOneGuest', {
  type: nonNull('Guest'),
  args: {
    where: nonNull('GuestWhereUniqueInput'),
    create: nonNull('GuestCreateInput'),
    update: nonNull('GuestUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.guest.upsert({
      ...args,
      ...select,
    })
  },
})
