 Job Portal Project

This is a full-stack job portal application that allows users to manage job listings and interact with candidates. The project includes a frontend, backend, and database integration.



 Features

- User Authentication: JWT-based login and registration.
- Job Management: Create, read, update, and delete (CRUD) job listings.
- Job Search: Users can search for jobs by keywords, location, or category.
- Application Management: Users can apply for jobs directly through the portal.
- Resume Upload: Users can upload their resumes to enhance their job applications.
- Cloudinary Integration: Manage job-related images and resumes using Cloudinary.
- Email Notifications: Use a mail service for notifications.
- Responsive Frontend: Built for an optimized user experience.



 Project Structure

 Backend:
Located in the `backend/` folder.
- Framework: Node.js with Express.js.
- Database: MongoDB, with connection handled in `database/connection.js`.
- Environment Variables: Configured in `config/config.env`.
- Key Files:
  - `server.js`: Main entry point for the backend.
  - `controllers/`: Contains logic for API endpoints.
  - `models/`: Defines the MongoDB schemas.

 Frontend:
Located in the `frontend/` folder.
- Framework: React.js.
- API Integration: Axios is used to interact with backend APIs.
- Styling: Built with modern CSS.



 Installation

 Prerequisites
- Node.js installed
- MongoDB running locally or remotely

 Steps

1. Clone the Repository:
   ```bash
   git clone https://github.com/your-repo/job-portal.git
   cd job-portal
   ```

2. Backend Setup:
   ```bash
   cd backend
   npm install
   ```

   

3. Frontend Setup:
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

   - Access the application at `http://localhost:3000`.



 Usage

1. Add Data to Database:
   - Seed the database with job listings using an API client (e.g., Postman) or manually via MongoDB.

2. Running the Application:
   - Ensure both frontend and backend servers are running.
   - Access the frontend at `http://localhost:3000`.

3. Search and Apply for Jobs:
   - Use the search functionality to find jobs matching your skills and preferences.
   - Apply directly to jobs by uploading your resume.








