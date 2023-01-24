import knex from '../database';

import { Medal } from './types';

export async function deleteMedal(id: number) {
  const medals = await knex<Medal>('medals')
    .where({ id: id })
    .update({ deleted_at: new Date() })
    .returning('*');
  return medals[0];
}
