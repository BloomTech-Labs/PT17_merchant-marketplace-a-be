const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('./ordersModel');
const router = express.Router();

router.get('/', authRequired, function (req, res) {
  const seller_id = req.profile.id;
  console.log('seller id', seller_id);
  Model.getOrdersBySellerId(seller_id)
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.post('/', authRequired, function (req, res) {
  const order = req.body;

  Model.create(order)
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.delete('/:orderID', authRequired, function (req, res) {
  const { orderID } = req.params;

  Model.remove(orderID)
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
