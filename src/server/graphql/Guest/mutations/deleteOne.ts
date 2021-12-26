import { mutationField, nonNull } from 'nexus'

export const GuestDeleteOneMutation = mutationField('deleteOneGuest', {
  type: 'Guest',
  args: {
    where: nonNull('GuestWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.guest.delete({
      where,
      ...select,
    })
  },
})
