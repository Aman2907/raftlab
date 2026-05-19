const menu = require("../models/menuModel");

const getMenu = (req, res) => {
res.json(menu);
};

module.exports = {
getMenu,
};
