const knex = require('../../data/db-config')

const getProfileRatings = async (id) => {
  return await knex('ratings as r')
    .where({ profile_id: id })
    .join('item as i', 'r.item_id', '=', 'i.id')
    .select('r.*', 'i.name');
};
const createRating = async (rating) => {
  return await knex.insert(rating).returning('*');
};

const editRating = async (profileId, itemId, newRating) => {
  return await knex
    .where({ profile_id: profileId, item_id: itemId })
    .update({ rating: newRating }, ['profile_id', 'item_id', 'rating']);
};

module.exports = { getProfileRatings, createRating, editRating };
