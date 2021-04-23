exports.up = function (knex) {
  return knex.schema.createTable('cart_items', (tbl) => {
    tbl
      .string('profile_id')
      .references('id')
      .inTable('profiles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('item_id')
      .references('id')
      .inTable('item')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('order_type')
      .references('id')
      .inTable('order_types')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('cart_items');
};
