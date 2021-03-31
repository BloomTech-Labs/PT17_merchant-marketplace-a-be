exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('order_types').insert([
    {
      name: 'pickup',
    },
    {
      name: 'delivery',
    },
    {
      name: 'both',
    },
  ]);
};
