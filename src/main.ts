import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './schema';

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  cors: { credentials: true },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
