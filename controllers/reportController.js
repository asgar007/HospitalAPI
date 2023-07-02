const Report = require('../modals/report');
const Patient = require('../modals/patients');
const Doctor = require('../modals/doctor');

const createReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const patient = await Patient.findById(id);
    const doctor = req.user; // Extracted from authentication middleware

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const report = new Report({
      patient: patient._id,
      doctor: doctor._id,
      status,
    });

    await report.save();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the report' });
  }
};

const getAllReports = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const reports = await Report.find({ patient: patient._id }).sort({ date: 'asc' });
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the reports' });
  }
};

const getReportsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const reports = await Report.find({ status });
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the reports' });
  }
};

module.exports = {
  createReport,
  getAllReports,
  getReportsByStatus,
};