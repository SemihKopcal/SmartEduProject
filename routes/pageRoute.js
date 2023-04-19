const express = require("express");
const pageController = require("../controlles/pageController");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);

module.exports = router;