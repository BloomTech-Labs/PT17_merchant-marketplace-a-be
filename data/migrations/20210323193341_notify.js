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
      tbl
        .integer('category_id')
        .references('id')
        .inTable('category')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .string('seller_id')
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.primary(['user_id', 'category_id', 'seller_id']);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('notifications')
    .dropTableIfExists('notification_types');
};
