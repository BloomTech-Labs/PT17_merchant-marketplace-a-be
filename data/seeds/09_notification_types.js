exports.seed = function (knex) {
  return knex('notification_types').insert([
    { name: 'text' },
    { name: 'email' },
  ]);
};
