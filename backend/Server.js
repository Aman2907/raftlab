const express = require("express");
const cors = require("cors");

const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/menu", menuRoutes);

app.use("/orders", orderRoutes);

app.listen(PORT, () => {
console.log(`Server Running On Port ${PORT}`);
});
