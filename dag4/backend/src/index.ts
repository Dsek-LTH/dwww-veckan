import { startStandaloneServer } from '@apollo/server/standalone';
import createApolloServer from './createApolloServer';

const server = createApolloServer();

startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
