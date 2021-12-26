import { queryField, nonNull } from 'nexus'

export const GuestFindUniqueQuery = queryField('findUniqueGuest', {
  type: 'Guest',
  args: {
    where: nonNull('GuestWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.guest.findUnique({
      where,
      ...select,
    })
  },
})
