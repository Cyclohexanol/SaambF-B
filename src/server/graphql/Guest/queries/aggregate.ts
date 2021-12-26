import { queryField, list } from 'nexus'

export const GuestAggregateQuery = queryField('aggregateGuest', {
  type: 'AggregateGuest',
  args: {
    where: 'GuestWhereInput',
    orderBy: list('GuestOrderByWithRelationInput'),
    cursor: 'GuestWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.guest.aggregate({ ...args, ...select }) as any
  },
})
