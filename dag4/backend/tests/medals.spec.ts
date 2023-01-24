import 'mocha';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import createApolloServer from '../src/createApolloServer';
import knex from '../src/database';
import medals, { medalToCreate } from './medals';
import { createMedal, readAllMedals } from './queries';

describe('Medals', () => {
  const server = createApolloServer();

  beforeEach(async () => {
    await knex('medals').truncate();
    await knex('medals').insert(medals);
  });

  it('fetches all medals', async () => {
    const { body } = await server.executeOperation({
      query: readAllMedals,
    });
    if (body.kind === 'single') {
      expect(body.singleResult.errors, JSON.stringify(body.singleResult.errors))
        .to.be.undefined;
      expect(body.singleResult.data?.medals).to.deep.equal(medals);
    }
  });

  it('creates a medal', async () => {
    const { body } = await server.executeOperation({
      query: createMedal,
      variables: {
        name: medalToCreate.name,
        description: medalToCreate.description,
        image: medalToCreate.image,
        requirement: medalToCreate.requirement,
      },
    });
    if (body.kind === 'single') {
      expect(body.singleResult.errors, JSON.stringify(body.singleResult.errors))
        .to.be.undefined;
      expect(body.singleResult.data?.createMedal).to.deep.equal(medalToCreate);
    }
  });
});
