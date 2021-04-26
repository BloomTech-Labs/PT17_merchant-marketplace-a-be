const db = require('../../data/db-config');

const getOrdersBySellerId = async (seller_profile_id) => {
  return await db('orders as o')
    .join('item as i', 'o.item_id', '=', 'i.id')
    .select('*')
    .where({ seller_profile_id });
};

const create = async (order) => {
  return await db('orders as o').insert(order).returning('*');
};

const remove = async (id) => {
  return await db('orders').where({ order_id: id }).del();
};

const getShoppingCart = (profile_id) => {
  return db('cart_items').where({ profile_id });
};

const deleteShoppingCart = (profile_id) => {
  return db('cart_items').del().where({ profile_id });
};

module.exports = {
  getOrdersBySellerId,
  create,
  remove,
  getShoppingCart,
  deleteShoppingCart,
};
