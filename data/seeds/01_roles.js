exports.seed = function (knex) {
  return knex('roles').insert([
    {
      name: 'seller',
    },
    {
      name: 'buyer',
    },
  ]);
};
