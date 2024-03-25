const express = require("express");
const router = express.Router();
const {
  home,
  employeeInfo,
  employeeId,
  employeeDelete,
  employeeInsert,
  employeeUpdate,
  putMethod,
} = require("../controller/auth-controller");

// Correct route definition with a callback function
router.route("/").get(home);
router.route("/employee").get(employeeInfo);
router.route("/employee/:id").get(employeeId);
router.route("/employee").post(employeeInsert);
router.route("/employee").put(putMethod);
router.route("/employee").patch(employeeUpdate);
router.route("/employee/:id").delete(employeeDelete);

module.exports = router;
