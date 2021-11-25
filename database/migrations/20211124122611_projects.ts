import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('projects', table=> {
        table.increments('id');
        table.string('title');
        table.string('slug');
        table.string('description', 2000);
        table.string('url');
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('projects')
}

