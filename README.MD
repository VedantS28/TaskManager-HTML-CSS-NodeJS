# Task Manager (Using Node JS)

A REST API for managing tasks built with Node.js, Express and MongoDB.

## Project Setup

1. Clone the repository
2. Create a `.env` file in the root directory
3. Add your MongoDB connection string to `.env`: MONGO_URI=your_mongodb_connection_string
4. Install dependencies using npm install
5. Use npm start to run the server

The server will run on port 5000 by default.

# API Documentation

## Endpoints

### Tasks

#### Get All Tasks
```http
GET /api/v1/tasks
```
Returns a list of all tasks.

#### Create Task
```http
POST /api/v1/tasks
```
Creates a new task.

#### Get Single Task
```http
GET /api/v1/tasks/:id
```
Returns a specific task by ID.

#### Update Task
```http
PATCH /api/v1/tasks/:id
```
Updates an existing task.

#### Delete Task
```http
DELETE /api/v1/tasks/:id
```
Deletes a task.

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
