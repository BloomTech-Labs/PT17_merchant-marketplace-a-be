exports.seed = function (knex) {
    return knex('orders').insert([
      {buyer_id: "00ulthapbErVUwVJy4x6", item_id: 1, quantity: 2}
    ]);
  };
  