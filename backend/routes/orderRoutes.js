const express = require("express");

const router = express.Router();

const {
placeOrder,
getOrder,
updateOrderStatus,
} = require("../controllers/orderController");

const validateOrder = require(
"../middleware/validationMiddleware"
);

router.post(
"/",
validateOrder,
placeOrder
);

router.get("/:id", getOrder);

router.put("/:id", updateOrderStatus);

module.exports = router;
