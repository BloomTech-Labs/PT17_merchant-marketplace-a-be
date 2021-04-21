const db = require('../data/db-config');

const findAll = async (text) => {
  return await db(text);
};

const findItemByProfile = async (seller_profile_id) => {
  return await db('item').select('*').where({ seller_profile_id });
};

const findAllWhere = async (text, cdn) => {
  return await db(text).where(cdn);
};

const createBySellerID = async (sellerID, item) => {
  return await db('item').insert(item).where({ seller_profile_id: sellerID });
};

const findAllProducts = async (text, id) => {
  return await db(text).select('*').where({ id });
};

const findBy = (text, filter) => {
  return db(text).where(filter);
};

const findById = async (text, id) => {
  return db(text).where({ id }).first().select('*');
};

const create = async (text, profile) => {
  return db(text).insert(profile).returning('*');
};
const createAndInsertById = async (text, item, id) => {
  return db(text).insert(item).where({ id });
};

const update = (text, id, obj) => {
  return db(text).where({ id: id }).first().update(obj).returning('*');
};

const remove = async (text, id) => {
  return await db(text).where({ id }).del();
};

const findOrCreate = async (text, obj) => {
  const foundObj = await findById(text, obj.id).then((obj) => obj);
  if (foundObj) {
    return foundObj;
  } else {
    return await create(text, obj).then((newObj) => {
      return newObj ? newObj[0] : newObj;
    });
  }
};
// GET info from join table
const getTagByItemId = async (itemID) => {
  return db('item as i')
    .join('tag_item as ti', 'i.id', 'ti.item_id')
    .join('tag as t', 't.id', 'ti.tag_id')
    .where('ti.item_id', itemID)
    .returning('*');
};
// GET info from join table
const getCategoryItem = async (itemID) => {
  return db('item as i')
    .join('category_item as ci', 'i.id', 'ci.item_id')
    .join('category as c', 'c.id', 'ci.category_id')
    .where('ci.item_id', itemID)
    .returning('*');
};

// GET info from join table
const getPhotoByItemID = async (itemID) => {
  return db('photo').where({ item_id: itemID }).select('*');
};

// connect items and tags
const connectItemsAndTags = async (itemID, tagID) => {
  return db('tag_item').insert({ item_id: itemID, tag_id: tagID });
};

//connect categories and items
const connectItemsAndCategories = async (itemID, catID) => {
  return db('category_item').insert({ item_id: itemID, category_id: catID });
};

//finds all users containing item in their watchlist for notifications
const findAllUsersWithCategory = async (category) => {
  return db('profiles').where({ category }).select('email');
};

module.exports = {
  findAll,
  findBy,
  findAllWhere,
  findById,
  findItemByProfile,
  create,
  update,
  remove,
  findOrCreate,
  findAllProducts,
  getCategoryItem,
  getTagByItemId,
  createAndInsertById,
  getPhotoByItemID,
  createBySellerID,
  connectItemsAndCategories,
  connectItemsAndTags,
  findAllUsersWithCategory,
};
