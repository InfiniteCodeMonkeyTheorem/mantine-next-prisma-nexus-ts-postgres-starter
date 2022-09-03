export const resolvers = {
  Query: {
    users: async (_parent, _args, ctx) => ctx.prisma.user.findMany(),
  },
};
