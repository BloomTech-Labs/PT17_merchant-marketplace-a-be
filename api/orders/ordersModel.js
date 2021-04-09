const db = require('../../data/db-config');

const getOrdersBySellerId = async (seller_profile_id) => {
    return await db('orders as o').join('item as i', 'o.item_id', '=', 'i.id').select('*').where({seller_profile_id});
  };
  
  module.exports = {
    getOrdersBySellerId
  };