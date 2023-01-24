import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('medals', (table) => {
    table.timestamps(true, true);
    table.string('deleted_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('medals', (table) => {
    table.dropColumn('created_at');
    table.dropColumn('updated_at');
    table.dropColumn('deleted_at');
  });
}
