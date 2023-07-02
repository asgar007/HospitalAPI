const jwt = require('jsonwebtoken');
const Doctor = require('../modals/doctor');

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Assuming token is passed in the request header as 'Bearer {token}'

    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, 'secretKey');
    const doctor = await Doctor.findById(decoded.doctorId);

    if (!doctor) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = doctor;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authenticate;