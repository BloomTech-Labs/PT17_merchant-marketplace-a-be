const router = require('express').Router();
const testData = require('./testdata.json');

router.get('/', (req, res) => {});

router.get('/testdata', async (req, res) => {
  const { title } = req.query;
  let ret = testData;
  if (title) {
    ret = ret.filter((i) =>
      i.item_name.toLowerCase().includes(title.toLowerCase())
    );
  }
  res.status(200).json(ret);
});

module.exports = router;
