const express = require("express");
const cors = require("cors");

const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/menu", menuRoutes);

app.use("/orders", orderRoutes);

app.listen(5000, () => {
console.log("Server Running On Port 5000");
});
