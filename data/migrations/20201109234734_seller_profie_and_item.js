exports.up = function (knex) {
  return knex.schema
    .createTable('roles', (tb) => {
      tb.increments();
      tb.string('name').unsigned().unique().notNullable();
    })
    .createTable('order_types', (tbl) => {
      tbl.increments();
      tbl.string('name').unique().notNullable();
    })
    .createTable('seller_profile', (tb) => {
      tb.string('id', 255).unique().notNullable().primary();
      tb.string('seller_name', 255);
      tb.string('email_address', 255);
      tb.string('phone_number', 255);
      tb.string('physical_address', 255);
      tb.text('description');
      tb.integer('role')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('roles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('category', (tb) => {
      tb.increments();
      tb.string('category_name', 255);
    })
    .createTable('tag', (tb) => {
      tb.increments();
      tb.string('tag_name', 255);
    })
    .createTable('item', (tb) => {
      tb.increments();
      tb.string('item_name', 255);
      tb.text('description');
      tb.integer('quantity_available').notNullable().unsigned().defaultTo(0);
      tb.integer('price_in_cents').notNullable().unsigned();
      tb.boolean('published').notNullable().defaultTo(false);
      tb.string('seller_profile_id')
        .notNullable()
        .references('id')
        .inTable('seller_profile')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.integer('order_type_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('order_types')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('photo', (tb) => {
      tb.increments();
      tb.string('url', 255);
      tb.integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('item')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('category_item', (tb) => {
      tb.integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('item')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('category')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('tag_item', (tb) => {
      tb.integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('item')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.integer('tag_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tag')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('tag_item')
    .dropTableIfExists('category_item')
    .dropTableIfExists('photo')
    .dropTableIfExists('item')
    .dropTableIfExists('tag')
    .dropTableIfExists('category')
    .dropTableIfExists('seller_profile')
    .dropTableIfExists('order_types')
    .dropTableIfExists('roles');
};
