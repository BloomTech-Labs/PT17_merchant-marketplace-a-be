exports.seed = function (knex) {
  // Inserts seed entries
  return knex('category').insert([
    { category_name: 'Consumer Goods' },
    { category_name: 'Billionaire Toys' },
    { category_name: 'rugs' },
  ]);
};
