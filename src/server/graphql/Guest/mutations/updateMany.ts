import { mutationField, nonNull } from 'nexus'

export const GuestUpdateManyMutation = mutationField('updateManyGuest', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('GuestUpdateManyMutationInput'),
    where: 'GuestWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.guest.updateMany(args as any)
  },
})
