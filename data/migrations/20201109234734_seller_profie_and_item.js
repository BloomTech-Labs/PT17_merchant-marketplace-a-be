exports.up = function (knex) {
  return knex.schema
    .createTable('seller_profile', (tb) => {
      tb.string('id', 255).unique().notNullable().primary();
    })
    .createTable('item', (tb) => {
      tb.increments();
      tb.string('name', 255);
      tb.text('description');
      tb.integer('quantity_available').notNullable().unsigned().defaultTo(0);
      tb.integer('price_in_cents').notNullable().unsigned();
      tb.boolean('published').notNullable().defaultTo(false);
      tb.string('seller_profile_id')
        .notNullable()
        .references('id')
        .inTable('seller_profile')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('photo', (tb) => {
      tb.increments();
      tb.string('url', 255);
      tb.integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('item')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('category', (tb) => {
      tb.increments();
      tb.string('name', 255);
    })
    .createTable('category_item', (tb) => {
      tb.increments();
      tb.integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('item')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tb.integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('category')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('tag', (tb) => {
      tb.increments();
      tb.string('name', 255);
    })
    .createTable('tag_item', (tb) => {
      tb.increments();
      tb.integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('item')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tb.integer('tag_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tag')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExist('seller_profile')
    .dropTableIfExist('item')
    .dropTableIfExist('photo')
    .dropTableIfExist('category')
    .dropTableIfExist('category_item')
    .dropTableIfExist('tag')
    .dropTableIfExist('tag_item');
};