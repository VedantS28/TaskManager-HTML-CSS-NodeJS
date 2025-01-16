# Task Manager (Using Node JS)

A REST API for managing tasks built with Node.js, Express and MongoDB.

## Project Setup

1. Clone the repository
2. Create a `.env` file in the root directory
3. Add your MongoDB connection string to `.env`: MONGO_URI=your_mongodb_connection_string
4. Install dependencies using npm install
5. Use npm start to run the server

The server will run on port 5000 by default.

## API Endpoints
### Tasks

GET /api/v1/tasks - Get all tasks
POST /api/v1/tasks - Create a new task
GET /api/v1/tasks/:id - Get a single task
PATCH /api/v1/tasks/:id - Update a task
DELETE /api/v1/tasks/:id - Delete a task

## Request Body Format

For creating/updating tasks: 
{
  "name": "Task name",
  "completed": false
}

## Error Handling

The API includes custom error handling middleware that returns:

Specific error messages for task operations
404 for routes that don't exist
500 for server errors

## Tech Stack

1. Node.js/Express.js
2. MongoDB/Mongoose
3. HTML/CSS
4. Vanilla JavaScript
