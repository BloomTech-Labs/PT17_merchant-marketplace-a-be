
exports.up = function(knex) {
  return knex.schema.createTable('ratings', tbl => {
    tbl.string('profile_id')
      .notNullable()
      .references('id')
      .inTable('profiles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    tbl.integer('item_id')
      .notNullable()
      .references('id')
      .inTable('item')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    tbl.integer('rating')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ratings')
};
