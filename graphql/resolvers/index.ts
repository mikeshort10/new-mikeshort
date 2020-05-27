export const resolvers = {
  Query: {
    ping: () => "ping",
    test: (_, { message }: { message: string }): string => message,
  },
};
