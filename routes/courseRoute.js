const express = require("express");
const courseController = require("../controlles/courseController");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

router.route("/").post(roleMiddleware(["teacher", "admin"]),courseController.creatCourse);
router.route("/").get(courseController.getAllCourses); // tüm kursların oldugu courses sayfası
router.route("/:slug").get(courseController.getCourse); //bu bi kursa tıklandıgında acılmasına yarıyor tek bir kurs

module.exports = router;
