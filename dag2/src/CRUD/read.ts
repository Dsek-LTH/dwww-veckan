import knex from '../database';

import { Medal } from './types';

export async function readAllMedals() {
  const medals = await knex<Medal>('medals').select('*');
  return medals;
}

export async function readOneMedal(id: number) {
  const medal = await knex<Medal>('medals').select('*').where('id', id);
  return medal[0];
}
