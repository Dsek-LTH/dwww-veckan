import type { Knex } from 'knex';

// Update with your config settings.

const config = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
    charset: 'utf8',
  },
  migrations: {
    directory: './knex/migrations',
  },
  seeds: {
    directory: './knex/seeds',
  },
};

export default config;
