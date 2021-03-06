const router = require('express').Router();
const authRequired = require('../middleware/authRequired');
const db = require('./ratingsModel');
const globalDb = require('../globalModel');

router.get('/', authRequired, async (req, res) => {
  const profileId = req.profile.id;
  try {
    const ratings = await db.getProfileRatings(profileId);
    res.status(200).json(ratings);
  } catch (err) {
    res.status(500).json({ message: 'a server error has occurred' });
  }
});

router.post('/', authRequired, async (req, res) => {
  const profileId = req.profile.id;
  const { itemId, rating } = req.body;
  if (!itemId || !rating) {
    res
      .status(400)
      .json({ message: 'rating must include an itemId and a rating' });
  } else {
    try {
      const item = await globalDb.findById('item', itemId);
      if (!item) {
        res.status(404).json({ message: 'itemId does not exist' });
      } else {
        const newRating = await db.createRating({
          profile_id: profileId,
          item_id: itemId,
          rating,
        });
        res.status(201).json(newRating[0]);
      }
    } catch (err) {
      res.status(500).json({ message: 'a server error has occurred' });
    }
  }
});

router.put('/:itemId', authRequired, async (req, res) => {
  const profileId = req.profile.id;
  const { itemId, rating } = req.body;
  try {
    const item = await globalDb.findById('item', itemId);
    if (!item) {
      res.status(404).json({ message: 'itemId does not exist' });
    } else {
      const newRating = db.editRating(profileId, itemId, rating);
      res.status(200).json(newRating);
    }
  } catch (err) {
    res.status(500).json({ message: 'a server error has occurred' });
  }
});

router.delete('/:itemId', authRequired, async (req, res) => {
  const profileId = req.profile.id;
  const { itemId } = req.params;
  try {
    const count = await db.deleteRating(profileId, itemId);
    count > 0
      ? res.status(204).send()
      : res.status(404).json({ message: 'could not find itemId' });
  } catch (err) {
    res.status(500).json({ message: 'a server error has occurred' });
  }
});

module.exports = router;
