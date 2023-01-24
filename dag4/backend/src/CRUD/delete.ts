import knex from '../database';

import { Medal } from './types';

export async function deleteMedal(id: number) {
  const medals = await knex<Medal>('medals')
    .where({ id: id })
    .del()
    .returning('*');
  return medals[0];
}
