exports.up = function (knex) {
  return knex.schema
    .raw(
      `
    ALTER TABLE
      item
    ADD CONSTRAINT
      qty_not_negative
    CHECK
      (quantity_available >= 0)
  `
    )
    .createTable('orders', (tbl) => {
      tbl
        .uuid('order_id')
        .notNullable()
        .unique()
        .defaultTo(knex.raw('uuid_generate_v4()'));
      tbl
        .string('buyer_id')
        .notNullable()
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
      tbl.integer('quantity').notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .raw(
      `
      ALTER TABLE
        item
      DROP CONSTRAINT
        qty_not_negative
    `
    )
    .dropTableIfExists('orders');
};
