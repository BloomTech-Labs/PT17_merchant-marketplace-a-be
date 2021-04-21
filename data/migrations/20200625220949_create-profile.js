exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('roles', (tb) => {
      tb.increments();
      tb.string('name').unsigned().unique().notNullable();
    })
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('phone_number', 255);
      table.string('name');
      table.string('avatarUrl');
      table.string('physical_address', 255);
      table.text('description');
      table.timestamps(true, true);
      table
        .integer('role')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('roles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('profiles');
};
