import { mutationField, nonNull } from 'nexus'

export const GuestCreateOneMutation = mutationField('createOneGuest', {
  type: nonNull('Guest'),
  args: {
    data: nonNull('GuestCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.guest.create({
      data,
      ...select,
    })
  },
})
