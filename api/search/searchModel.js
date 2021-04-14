const db = require('../../data/db-config');

const getItems = async () => {
  return await db('item as i')
    .join('profiles as p', 'i.seller_profile_id', '=', 'p.id')
    .select('i.*', 'p.physical_address');
};

const getCategories = async () => {
  return await db('category');
};

const getItemCategories = async (item) => {
  let categories = await db('category_item as r')
    .where({ item_id: item.id })
    .join('category as c', 'r.category_id', '=', 'c.id')
    .select('c.category_name as name');
  categories = categories.map((c) => c.name);
  item.categories = categories;
  return item;
};

const getImages = async (item) => {
  let images = await db('photo as p')
    .where({ item_id: item.id })
    .select('p.url as url');
  item.images = images.map((i) => i.url);
  return item;
};

module.exports = { getItems, getCategories, getItemCategories, getImages };
