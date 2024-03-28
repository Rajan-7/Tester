const express = require("express");
const router = express.Router();
const { services, getServices } = require("../controller/service-controller");

router.route("/services").post(services);
router.route("/services").get(getServices);

module.exports = router;
