import { mutationField, nonNull } from 'nexus'

export const GuestDeleteManyMutation = mutationField('deleteManyGuest', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'GuestWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.guest.deleteMany({ where } as any)
  },
})
