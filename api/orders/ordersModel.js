const db = require('../../data/db-config');

const getOrdersBySellerId = async (seller_profile_id) => {
  return await db('orders as o')
    .join('item as i', 'o.item_id', '=', 'i.id')
    .select('*')
    .where({ seller_profile_id });
};

const create = async (order) => {
  return db('orders as o').insert(order).returning('*');
};

const remove = async (id) => {
  return await db('orders').where({order_id: id}).del();
};

module.exports = {
  getOrdersBySellerId,
  create,
  remove
};
