import knex from '../database';

import { Medal } from './types';

async function readMedals() {
  const medals = await knex<Medal>('medals').select('*');
  console.log(medals);
}

readMedals();
