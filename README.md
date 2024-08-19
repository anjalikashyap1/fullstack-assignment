# Help Center API

## Overview

This project is a RESTful API for managing "Help Center" cards. The API allows users to create, retrieve, and manage different sections of a help center, such as "Branches," "Manage Your Account," "Manage Billing," etc.


## Running the project
for backend: npm run dev
for frontend: npm run dev


## Project Requirements

- **Node.js & Express.js**: The project is built using Node.js with Express.js.
- **ORM & Database**: Mongoose is used for database.
- **Card Model**:
  - `id` (string): A unique identifier for the card.
  - `title` (string): The title of the card.
  - `description` (string): A brief description of the card.

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

# Configure the Environment
Create a .env file in the root of the project directory to configure environment variables

# Start the Server
with nodemon (for development)
npm run dev
The server will start and listen on the port defined in the .env file, or the default port 3000

# Verify the Server
To verify that the server is running, open your browser or use a tool like Postman to access the following endpoint:GET http://localhost:3000/ping


# API Endpoints
# 1. Create a Card
Endpoint: POST /cards
Description: Create a new card in the help center.
Request Body:{
  "title": "Branches",
  "description": "Abstract Branches lets you manage, version, and document your designs in one place."
}
Response:{
  "id": "unique-card-id",
  "title": "Branches",
  "description": "Abstract Branches lets you manage, version, and document your designs in one place."
}

# Get a Specific Card
Endpoint: GET /cards/:title
Description: Retrieve the details of a specific card by its title.
Response:{
  "id": "unique-card-id",
  "title": "Branches",
  "description": "Abstract Branches lets you manage, version, and document your designs in one place."
}

# Error Handling
The API includes basic error handling for scenarios such as:

404 Not Found: If a card with the requested title doesn't exist.
400 Bad Request: If the request body is missing required fields or is malformed.
500 Internal Server Error: For unexpected server errors.

# Testing the API
You can test the API endpoints using tools like Postman

License
This project is licensed under the MIT License - see the LICENSE file for details.