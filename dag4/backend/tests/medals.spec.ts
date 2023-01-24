import 'mocha';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import createApolloServer from '../src/createApolloServer';
import knex from '../src/database';
import medals from './medals';

describe('Medals', () => {
  const server = createApolloServer();

  before(async () => {
    await knex('medals').del();
    await knex('medals').insert(medals);
  });

  it('fetches all medals', async () => {
    const { body } = await server.executeOperation({
      query: `
      query {
        medals {
          id
          name
          description
          image
          requirement
        }
      }
      `,
    });
    if (body.kind === 'single') {
      expect(body.singleResult.errors, JSON.stringify(body.singleResult.errors))
        .to.be.undefined;
      expect(body.singleResult.data?.medals).to.deep.equal(medals);
    }
  });
});
