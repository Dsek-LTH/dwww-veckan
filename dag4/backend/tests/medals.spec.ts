import 'mocha';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import createApolloServer from '../src/createApolloServer';
import knex from '../src/database';
import medals, { medalToCreate } from './medals';
import {
  createMedal,
  deleteMedal,
  readAllMedals,
  updateMedal,
} from './queries';

describe('Medals', () => {
  const server = createApolloServer();

  beforeEach(async () => {
    await knex('medals').truncate();
    await knex('medals').insert(medals);
  });

  it('Creates a medal', async () => {
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

  it('Reads all medals', async () => {
    const { body } = await server.executeOperation({
      query: readAllMedals,
    });
    if (body.kind === 'single') {
      expect(body.singleResult.errors, JSON.stringify(body.singleResult.errors))
        .to.be.undefined;
      expect(body.singleResult.data?.medals).to.deep.equal(medals);
    }
  });

  it('Updates all fields', async () => {
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
      expect(body.singleResult.errors, JSON.stringify(body.singleResult.errors))
        .to.be.undefined;
      expect(body.singleResult.data?.updateMedal).to.deep.equal({
        name: 'Updated name',
        description: 'Updated description',
        image: 'Updated image',
        requirement: 'Updated requirement',
      });
    }
  });

  it('updates no fields', async () => {
    const { body } = await server.executeOperation({
      query: updateMedal,
      variables: {
        id: 1,
        input: {},
      },
    });
    if (body.kind === 'single') {
      expect(
        body.singleResult.errors?.[0].message,
        'Should throw an error'
      ).to.equal('No data to update');
    }
  });

  it('updates one field', async () => {
    const { body } = await server.executeOperation({
      query: updateMedal,
      variables: {
        id: 1,
        input: {
          name: 'Updated name',
        },
      },
    });
    if (body.kind === 'single') {
      expect(body.singleResult.errors, JSON.stringify(body.singleResult.errors))
        .to.be.undefined;
      expect(body.singleResult.data?.updateMedal).to.deep.equal({
        name: 'Updated name',
        description: medals[0].description,
        image: medals[0].image,
        requirement: medals[0].requirement,
      });
    }
  });

  it('updates two fields', async () => {
    const { body } = await server.executeOperation({
      query: updateMedal,
      variables: {
        id: 1,
        input: {
          name: 'Updated name',
          description: 'Updated description',
        },
      },
    });
    if (body.kind === 'single') {
      expect(body.singleResult.errors, JSON.stringify(body.singleResult.errors))
        .to.be.undefined;
      expect(body.singleResult.data?.updateMedal).to.deep.equal({
        name: 'Updated name',
        description: 'Updated description',
        image: medals[0].image,
        requirement: medals[0].requirement,
      });
    }
  });

  it('deletes a medal', async () => {
    const { body } = await server.executeOperation({
      query: deleteMedal,
      variables: {
        id: 1,
      },
    });
    if (body.kind === 'single') {
      expect(body.singleResult.errors, JSON.stringify(body.singleResult.errors))
        .to.be.undefined;
      expect(body.singleResult.data?.deleteMedal).to.deep.equal(medals[0]);
    }
  });
});
