import { ApolloServer } from '@apollo/server';

import { readFileSync } from 'fs';

import { resolve } from 'path';

import { startStandaloneServer } from '@apollo/server/standalone';

import resolvers from './resolvers';

const typeDefs = readFileSync(resolve(__dirname, 'schema.graphql'), {
  encoding: 'utf-8',
});

const server = new ApolloServer<{}>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
