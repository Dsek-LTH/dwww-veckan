import { ApolloServer } from '@apollo/server';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import resolvers from './resolvers';

const typeDefs = readFileSync(resolve(__dirname, './schema.graphql'), 'utf8');

const createApolloServer = () => {
  return new ApolloServer<{}>({
    typeDefs,
    resolvers,
  });
};

export default createApolloServer;
