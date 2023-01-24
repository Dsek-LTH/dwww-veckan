import knex from '../database';

import { Medal } from './types';

export async function readAllMedals() {
  const medals = await knex<Medal>('medals')
    .select('*')
    .whereNull('deleted_at');
  return medals;
}

export async function readOneMedal(id: number) {
  const medal = await knex<Medal>('medals')
    .select('*')
    .where({ id })
    .whereNull('deleted_at');
  return medal[0];
}
