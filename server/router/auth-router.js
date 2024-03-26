const express = require("express");
const router = express.Router();
const authcontrollers = require("../controller/auth-controller");

// Correct route definition with a callback function
router.route("/").get(authcontrollers.home);
router.route("/employee").get(authcontrollers.employeeInfo);
router.route("/employee/:id").get(authcontrollers.employeeId);
router.route("/employee").post(authcontrollers.employeeInsert);
router.route("/employee").put(authcontrollers.putMethod);
router.route("/employee").patch(authcontrollers.employeeUpdate);
router.route("/employee/:id").delete(authcontrollers.employeeDelete);



module.exports = router;
