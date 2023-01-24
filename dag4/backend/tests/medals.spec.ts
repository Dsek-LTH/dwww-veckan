import 'mocha';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import createApolloServer from '../src/createApolloServer';

describe('Medals', () => {
  const server = createApolloServer();
  it('should be a test', async () => {
    const response = await server.executeOperation({
      query: `
      query {
        medals {
          name
        }
      }
      `,
    });
    if (response.body.kind === 'single') {
      expect(response.body.singleResult.errors).to.be.undefined;
    }
  });
});
