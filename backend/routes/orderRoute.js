const express = require("express");
const router = express.Router();
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const { authCheck, adminCheck } = require("../middlewares/auth");

router.route("/order/new").post(authCheck, newOrder);

router.route("/order/:id").get(authCheck, getSingleOrder);

router.route("/orders/user").get(authCheck, myOrders);

router.route("/admin/orders").get(authCheck, adminCheck, getAllOrders);

router
  .route("/admin/orders/:id")
  .put(authCheck, adminCheck, updateOrder)
  .delete(authCheck, adminCheck, deleteOrder);

module.exports = router;
