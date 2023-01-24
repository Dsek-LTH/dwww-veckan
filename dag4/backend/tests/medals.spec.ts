import 'mocha';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import createApolloServer from '../src/createApolloServer';
import knex from '../src/database';
import medals, { medalToCreate } from './medals';
import { createMedal, readAllMedals, updateMedal } from './queries';

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

      const { body: readBody } = await server.executeOperation({
        query: readAllMedals,
      });
      if (readBody.kind === 'single') {
        expect(
          readBody.singleResult.errors,
          JSON.stringify(readBody.singleResult.errors)
        ).to.be.undefined;
        expect(readBody.singleResult.data?.medals).to.deep.equal([
          ...medals,
          medalToCreate,
        ]);
      }
    }
  });

  describe('Update medal', () => {
    it('updates all fields', async () => {
      const { body } = await server.executeOperation({
        query: updateMedal,
        variables: {
          id: 1,
          input: {
            name: 'Updated name',
            description: 'Updated description',
            image: 'Updated image',
            requirement: 'Updated requirement',
          },
        },
      });
      if (body.kind === 'single') {
        expect(
          body.singleResult.errors,
          JSON.stringify(body.singleResult.errors)
        ).to.be.undefined;
        expect(body.singleResult.data?.updateMedal).to.deep.equal({
          name: 'Updated name',
          description: 'Updated description',
          image: 'Updated image',
          requirement: 'Updated requirement',
        });
      }
    });
  });
});
