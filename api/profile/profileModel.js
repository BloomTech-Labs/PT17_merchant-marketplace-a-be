const knex = require('../../data/db-config');

const getShoppingCart = (profile_id) => {
  return knex('cart_items as c')
    .join('item as i', 'c.item_id', '=', 'i.id')
    .where({ profile_id })
    .select(
      'i.id',
      'c.order_type',
      'c.qty',
      'i.item_name',
      'i.price_in_cents',
      'i.seller_profile_id'
    );
};

const addItemToShoppingCart = async (item) => {
  await knex('cart_items').insert(item);
  return getShoppingCart(item.profile_id);
};

const removeItemFromShoppingCart = (profile_id, item_id) => {
  return knex('cart_items').del().where({ profile_id, item_id });
};

const editQtyInCart = async (profile_id, item_id, qty) => {
  await knex('cart_items').update({ qty }).where({ profile_id, item_id });
  return getShoppingCart(profile_id);
};

module.exports = {
  getShoppingCart,
  addItemToShoppingCart,
  removeItemFromShoppingCart,
  editQtyInCart,
};
