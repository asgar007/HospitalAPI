const express = require('express');
const router = express.Router();

/* ALL ROUTES */
router.use('/doctors', require('./doctorRoutes'));
router.use('/patients', require('./patientRoutes'));
router.use('/reports', require('./reportRoutes'));


console.log('router loaded');
module.exports = router; 