Project Name

This project is a Dynamic User Availability and Scheduling System, built to manage user availability and schedule events effectively. It consists of two main parts: the frontend and the backend.
Table of Contents

    Frontend
    Backend
    Installation
    Technologies Used
    Features
    Running the Project
    License

Frontend

The frontend of this project is developed using React with TypeScript and styled with CSS. It focuses on user-friendly interfaces for login, availability management, and scheduling.
Folder Structure

The frontend resides in the clients-availability folder and contains the following key components:

    src/components: Contains the React components for various views such as Login, Home, and AvailabilityForm.
    src/styles: Contains the stylesheets for various parts of the app, such as Navbar.css, Admin.css, and more.
    public: Holds static assets like index.html and icons.

Key Features

    User Authentication: Users can log in with their email.
    Dynamic Scheduling: Users can manage their availability and schedule sessions.
    Responsive Design: The app is mobile-friendly and fully responsive.

How to Run Frontend

    Navigate to the frontend directory:

    bash

cd clients-availability

Install dependencies:

bash

npm install

Start the development server:

bash

    npm start

Backend

The backend is built with Node.js and Express.js and interacts with a MongoDB database to store and manage data like users and their availability.
Folder Structure

The backend resides in the backend folder and consists of:

    routes: Defines the API endpoints for users, availability, etc.
    controllers: Handles the logic for processing API requests.
    models: MongoDB models for entities like User, Session, etc.
    config: Database and environment configuration.

Key Features

    RESTful API: Exposes endpoints for user authentication, session scheduling, and user management.
    JWT Authentication: Secure authentication using JSON Web Tokens (JWT).
    MongoDB Integration: Stores user data and availability information in MongoDB.

How to Run Backend

    Navigate to the backend directory:

    bash

cd backend

Install dependencies:

bash

npm install

Run the server:

bash

    npm start

Installation

To install and run both the frontend and backend, follow these steps:

    Clone the Repository:

    bash

git clone https://github.com/abhi012323/Scheduling-System.git

Set Up Backend:

    Navigate to the backend folder:

    bash

cd backend

Install dependencies:

bash

npm install

Add a .env file for environment variables (like MongoDB URI):

bash

    MONGO_URI=your-mongodb-uri

Set Up Frontend:

    Navigate to the clients-availability folder:

    bash

cd clients-availability

Install dependencies:

bash

        npm install

Technologies Used

    Frontend: React, TypeScript, Axios, CSS
    Backend: Node.js, Express.js, MongoDB, JWT for Authentication
    Database: MongoDB (with Mongoose)
    Environment Management: dotenv

Features

    User Authentication: Secure login system with JWT.
    Availability Management: Users can manage their availability and schedule sessions.
    Admin Panel: Allows admins to manage users and sessions.
    Responsive UI: Mobile-friendly design.

Running the Project

    Run the backend:

    bash

cd backend
npm start

Run the frontend:

bash

    cd clients-availability
    npm start

License

This project is licensed under the MIT License.
