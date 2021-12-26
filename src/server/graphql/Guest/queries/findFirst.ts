import { queryField, list } from 'nexus'

export const GuestFindFirstQuery = queryField('findFirstGuest', {
  type: 'Guest',
  args: {
    where: 'GuestWhereInput',
    orderBy: list('GuestOrderByWithRelationInput'),
    cursor: 'GuestWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('GuestScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.guest.findFirst({
      ...args,
      ...select,
    })
  },
})
