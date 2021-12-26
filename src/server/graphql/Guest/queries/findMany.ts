import { queryField, nonNull, list } from 'nexus'

export const GuestFindManyQuery = queryField('findManyGuest', {
  type: nonNull(list(nonNull('Guest'))),
  args: {
    where: 'GuestWhereInput',
    orderBy: list('GuestOrderByWithRelationInput'),
    cursor: 'GuestWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('GuestScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.guest.findMany({
      ...args,
      ...select,
    })
  },
})
