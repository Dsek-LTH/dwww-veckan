import 'mocha';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import createApolloServer from '../src/createApolloServer';

describe('Medals', () => {
  const server = createApolloServer();

  before(async () => {});

  it('fetches all medals', async () => {
    const { body } = await server.executeOperation({
      query: `
      query {
        medals {
          name
        }
      }
      `,
    });
    if (body.kind === 'single') {
      expect(body.singleResult.errors, JSON.stringify(body.singleResult.errors))
        .to.be.undefined;
    }
  });
});
