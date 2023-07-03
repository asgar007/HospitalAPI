# Hospital API

This is an API for a hospital system designed to manage COVID-19 patients and their reports. It provides functionality for doctors to register, log in, register patients, create patient reports, and retrieve patient reports based on different criteria.

## Tech Stack

- Node.js
- MongoDB

## Folder Structure

The project follows a scalable folder structure with separate models, controllers, and routes:

```
- controllers
    - doctorController.js
    - patientController.js
    - reportController.js
- models
    - doctor.js
    - patient.js
    - report.js
- routes
    - doctorRoutes.js
    - patientRoutes.js
    - reportRoutes.js
- middleware
    - authenticate.js
- index.js
```

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/hospital-api.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the MongoDB connection:
   - Open `index.js`
   - Replace `'mongodb://localhost/hospital_db'` with your MongoDB connection string

4. Start the server:
   ```
   npm start
   ```

## API Endpoints

### Doctors

- `POST /doctors/register`: Register a new doctor
- `POST /doctors/login`: Log in as a doctor (returns JWT)

### Patients

- `POST /patients/register`: Register a new patient
- `POST /patients/:id/create_report`: Create a report for a patient
- `GET /patients/:id/all_reports`: Get all reports of a specific patient

### Reports

- `GET /reports/:status`: Get all reports filtered by status

## Authentication

The following routes require authentication:

- `POST /patients/:id/create_report`
- `GET /patients/:id/all_reports`

To authenticate, include the JWT in the request header as follows:

```
Authorization: Bearer {token}
```

Replace `{token}` with the JWT obtained from the login route.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
