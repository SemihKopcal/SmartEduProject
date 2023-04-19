const express = require("express");
const courseController = require("../controlles/courseController");

const router = express.Router();

router.route("/").post(courseController.createCourse);

module.exports = router;