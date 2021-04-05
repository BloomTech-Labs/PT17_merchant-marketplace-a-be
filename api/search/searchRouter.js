const router = require('express').Router();
const testData = require('./testdata.json');
const model = require('./searchModel');
const authRequired = require('../middleware/authRequired');

//mapbox
const mbxClient = require('@mapbox/mapbox-sdk');
const mbxGeocoder = require('@mapbox/mapbox-sdk/services/geocoding');

const baseClient = mbxClient({ accessToken: process.env.MAPBOX_SECRET });
const geocodeService = mbxGeocoder(baseClient);

prepareItemList = async () => {
  let items = await model.getItems();
  items = await Promise.all(
    items.map(
      async (i) => await model.getItemCategories(i).then((newItem) => newItem)
    )
  );
  items = await Promise.all(
    items.map(async (i) => {
      const geoRes = await geocodeService
        .forwardGeocode({ query: i.physical_address, limit: 1 })
        .send();
      i.latitude = geoRes.body.features[0].center[0];
      i.longitude = geoRes.body.features[0].center[1];
      return i;
    })
  );
  return items;
};

router.get('/', authRequired, async (req, res) => {
  const profile_address = req.profile.physical_address;
  const { title, category, address, zip } = req.query;
  try {
    let items = await prepareItemList();
    if (title) {
      items = titleCompare(items, title);
    }
    if (category) {
      items = categoryCompare(items, category);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'a server error occured' });
  }
});

router.get('/testdata', async (req, res) => {
  const { title } = req.query;
  let ret = testData;
  if (title) {
    ret = titleCompare(ret, title);
  }
  res.status(200).json(ret);
});

titleCompare = (items, title) => {
  return items.filter((i) =>
    i.item_name.toLowerCase().includes(title.toLowerCase())
  );
};

categoryCompare = (items, category) => {
  return items.filter((i) => i.categories.includes(category));
};

module.exports = router;
