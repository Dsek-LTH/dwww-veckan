import knex from '../database';

import { Medal } from './types';

async function updateMedal({
  id,
  name,
  description,
  requirement,
  image,
}: {
  id: number;
  name?: string;
  description?: string;
  requirement?: string;
  image?: string;
}) {
  if (!name && !description && !requirement && !image) {
    throw new Error('No data to update');
  }
  const medals = await knex<Medal>('medals')
    .where({ id: id })
    .update({
      name,
      description,
      requirement,
      image,
    })
    .returning('*');
  console.log(medals);
}

updateMedal({
  id: 2,
  name: 'Oliver testar',
});
