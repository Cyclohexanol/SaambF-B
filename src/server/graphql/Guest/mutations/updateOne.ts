import { mutationField, nonNull } from 'nexus'

export const GuestUpdateOneMutation = mutationField('updateOneGuest', {
  type: nonNull('Guest'),
  args: {
    data: nonNull('GuestUpdateInput'),
    where: nonNull('GuestWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.guest.update({
      where,
      data,
      ...select,
    })
  },
})
