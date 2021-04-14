exports.up = function (knex) {
  return knex.schema
    .createTable('notification_types', (tbl) => {
      tbl.increments();
      tbl.string('name').notNullable().unique();
    })
    .createTable('notifications', (tbl) => {
      tbl
        .string('user_id')
        .notNullable()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('keyword');
      tbl.primary(['user_id', 'keyword']);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('notifications')
    .dropTableIfExists('notification_types');
};
