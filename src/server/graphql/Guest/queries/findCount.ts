import { queryField, nonNull, list } from 'nexus'

export const GuestFindCountQuery = queryField('findManyGuestCount', {
  type: nonNull('Int'),
  args: {
    where: 'GuestWhereInput',
    orderBy: list('GuestOrderByWithRelationInput'),
    cursor: 'GuestWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('GuestScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.guest.count(args as any)
  },
})
