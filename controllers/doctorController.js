const Doctor = require('../modals/doctor');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const doctor = new Doctor({
      username,
      password: hashedPassword,
    });

    await doctor.save();

    res.status(200).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while registering the doctor' });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const doctor = await Doctor.findOne({ username });

    if (!doctor) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, doctor.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ doctorId: doctor._id }, 'secretKey');
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
};

module.exports = {
  register,
  login,
};