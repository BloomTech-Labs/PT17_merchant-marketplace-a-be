const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('./ordersModel');
const router = express.Router();


router.get('/', authRequired, function (req, res) {
    const seller_id = req.profile.id
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

  module.exports = router;
