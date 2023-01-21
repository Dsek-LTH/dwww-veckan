import knex from '../database';

import { Medal } from './types';

export async function updateMedal(
  id: number,
  {
    name,
    description,
    requirement,
    image,
  }: {
    name?: string | undefined;
    description?: string | undefined;
    requirement?: string | undefined;
    image?: string | undefined;
  }
) {
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
  return medals[0];
}
