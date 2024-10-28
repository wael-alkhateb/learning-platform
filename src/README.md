# learning-platform
## Description
Learning Platform is a web-based platform designed to provide users with online courses. Users can view available courses, register or log in, and access course details and video lessons.
## Features
User authentication (Register/Login/Logout)
View list of available courses
Access course details
Protected routes: Users must log in to view course details
Responsive design
## Tech Stack
React.js (Frontend)
React Router for routing
Context API for managing user authentication
CSS for styling
## Installation
To run this project locally, follow these steps:
Clone the repository:
    ```bash
    git clone https://github.com/wael-alkhateb/learning-platform.git
    ```
Navigate to the project directory:
    ```bash
    cd learning-platform
    ```
Install the required dependencies:
    ```bash
    npm install
    ```
Start the development server:
    ```bash
    npm start
    ```
Open the browser and visit:
    ```bash
    http://localhost:5176
    ```
## Pages and Components
### 1. Home Page
The main landing page of the platform.
Contains links to register, login, and view courses.
### 2. Courses Page
Displays a list of available courses.
Links to each course's details page.
### 3. Course Detail 
Displays detailed information about a specific course.
Contains a link to watch the course video.
### 4. User Authentication (Register/Login)
Allows users to register, log in, and log out.
Protects certain routes (such as course details) from unauthorized access.
### 5. Protected Routes
The `Courses` page and course details are protected, and only accessible to logged-in users.
## Project Structure

The project is structured as follows:

**Pages**:
`About.jsx`: Information about the platform.
`Home.jsx`: The main landing page.
`Courses.jsx`: Page listing all available courses.
**Components**:
`CourseDetail.jsx`: Displays detailed information about a specific course.
`CourseList.jsx`: Lists available courses.
`HeroSection.jsx`: Main section on the home page.
`Login.jsx`: Handles user login.
`Navbar.jsx`: The navigation bar with links to various pages.
`PopularCourses.jsx`: Displays popular courses.
`ProtectedRouter.jsx`: Component that protects routes and ensures only logged-in users can access certain pages.
`Register.jsx`: Handles user registration.
## User Context
The **UserContext** is used to manage user authentication state throughout the application. It allows components to access user data, such as whether a user is logged in or not, and provides methods to update this data.
### Implementation
The **UserContext** is created using React's Context API. It provides a way to share the user state across different components without needing to pass props manually at every level.
### Key Features
**User State Management**: Maintains the current user's authentication state.
**Persistent User Data**: Retrieves saved user data from `localStorage` when the application loads, ensuring that the user's session is preserved across page refreshes.
**Context Provider**: Wraps the application to provide user data and functions to update the user state.
## How to Use

1. **Register** a new user or **login** with an existing account.
2. Navigate to the **Courses** page to view available courses.
3. Click on a course to view its details.
4. Users must be logged in to access course details and watch course videos.
## Available Scripts

`npm start`: Starts the development server.
`npm run build`: Builds the app for production.
`npm test`: Runs tests (if available).
`npm run eject`: Ejects the application from `create-react-app` (use with caution).