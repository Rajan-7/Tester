const express = require('express');
const router = express.Router();
const {home,employeeInfo,employeeId,employeeDelete,employeeInsert} = require('../controller/auth-controller');

// Correct route definition with a callback function
router.route('/').get(home);
router.route('/employee').get(employeeInfo);
router.route('/employee/:id').get(employeeId);
router.route('/employee').patch(employeeInsert);
router.route('/employee/:id').delete(employeeDelete);


module.exports = router;