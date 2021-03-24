exports.seed = function (knex) {
  return knex('table_name').insert([{ name: 'text' }, { name: 'email' }]);
};
