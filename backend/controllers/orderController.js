const orders = require("../models/orderModel");
const placeOrder = (req, res) => {

const order = {
id: Date.now(),
...req.body,
status: "Order Received",
};

orders.push(order);

res.status(201).json(order);
};

const getOrder = (req, res) => {

const order = orders.find(
(o) => o.id == req.params.id
);

if (!order) {
return res.status(404).json({
message: "Order not found",
});
}

res.json(order);
};

const updateOrderStatus = (req, res) => {

const order = orders.find(
(o) => o.id == req.params.id
);

if (!order) {
return res.status(404).json({
message: "Order not found",
});
}

order.status = req.body.status;

res.json(order);
};

module.exports = {
placeOrder,
getOrder,
updateOrderStatus,
};
