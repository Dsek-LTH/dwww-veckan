import { readFileSync } from 'fs';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolve } from 'path';
import resolvers from './resolvers';

const typeDefs = readFileSync(resolve(__dirname, './schema.graphql'), 'utf8');

const server = new ApolloServer<{}>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
