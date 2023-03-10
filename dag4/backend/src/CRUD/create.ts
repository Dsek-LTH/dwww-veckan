import knex from '../database';

import { Medal } from './types';

export async function createMedal(
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
  return medals[0];
}
