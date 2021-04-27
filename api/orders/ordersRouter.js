const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('./ordersModel');
const router = express.Router();

router.get('/', authRequired, function (req, res) {
  const seller_id = req.profile.id;
  Model.getOrdersBySellerId(seller_id)
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post('/', authRequired, async function (req, res) {
  const { id } = req.profile;
  try {
    const cart = await Model.getShoppingCart(id);
    if (cart.length > 0) {
      const orders = await Promise.all(
        cart.map(async (item) => {
          const order = await Model.create({
            item_id: item.item_id,
            buyer_id: id,
            quantity: item.qty,
          });
          return order[0];
        })
      );
      await Model.deleteShoppingCart(id);
      res.status(201).json(orders);
    } else {
      res
        .status(400)
        .json({ message: 'no items in logged in users shopping cart' });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: 'An error occurred while creating orders' });
  }
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
