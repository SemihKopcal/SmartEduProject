const express = require("express");
const categoryController = require("../controlles/categoryController");

const router = express.Router();

router.route("/").post(categoryController.creatCategory);

module.exports = router;
