const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const reportController = require('../controllers/reportController');
const authenticate = require('../middlewares/authenticate');

router.post('/register', patientController.register);
router.post('/:id/create_report', authenticate, reportController.createReport);
router.get('/:id/all_reports', authenticate, reportController.getAllReports);

module.exports = router;