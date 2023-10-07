const express = require("express");
const authorRoutes = require("./authorRoutes");

const router = express.Router();

router.use("/authors", authorRoutes);

module.exports = router;
