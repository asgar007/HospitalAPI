const Patient = require('../modals/patients');

const register = async (req, res) => {
  try {
    const { phone } = req.body;
    let patient = await Patient.findOne({ phone });

    if (!patient) {
      patient = new Patient({ phone });
      await patient.save();
    }

    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while registering the patient' });
  }
};

module.exports = {
  register,
};