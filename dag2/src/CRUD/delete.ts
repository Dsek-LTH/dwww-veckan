import knex from '../database';

import { Medal } from './types';

async function deleteMedal(id: number) {
  const medals = await knex<Medal>('medals')
    .where({ id: id })
    .del()
    .returning('*');
  console.log(medals);
}

deleteMedal(2);
