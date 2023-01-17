import knex from './database';

import { Medal } from './types';

async function createMedal(
  name: string,
  description: string,
  requirement: string,
  image: string
) {
  const medals = await knex<Medal>('medals')
    .insert({
      name,
      description,
      requirement,
      image,
    })
    .returning('*');
  console.log(medals);
}

createMedal(
  'Ductig',
  'Denna medalj får man om man är cool',
  'är duktig',
  './images/ductig.png'
);
