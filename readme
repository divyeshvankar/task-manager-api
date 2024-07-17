---

# Task Management API

This project implements a RESTful API for a task management application. It allows users to perform CRUD operations on tasks, manage authentication using JWT, and ensures secure and performant handling of data.

## Requirements

### API Endpoints

- **Create a Task:** `POST /tasks`
- **Get All Tasks:** `GET /tasks`
- **Get a Specific Task:** `GET /tasks/:id`
- **Update a Task:** `PUT /tasks/:id`
- **Delete a Task:** `DELETE /tasks/:id`

### Task Data Model

- **id:** Unique identifier (auto-generated)
- **title:** String (required)
- **description:** String (optional)
- **status:** String (required, options: 'pending', 'in-progress', 'completed')
- **dueDate:** Date (optional)

### Authentication & Authorization

- User authentication (sign up, log in)
- Each user can manage only their own tasks
- JWT (JSON Web Tokens) for securing endpoints

### Error Handling

- Proper error handling with appropriate HTTP status codes
- Validation of inputs with meaningful error messages

### Code Quality

- Clean, maintainable, well-documented code
- Follow best practices and coding standards
- Include comments for clarity where necessary

### Testing

- Unit and integration tests
- Use a testing framework (e.g., Jest) for testing

### Documentation

- API documentation (Swagger, Postman, etc.)
- Setup instructions for running the application locally
- Instructions for running tests

### Bonus Features

- Pagination for tasks list
- Search/filter feature for tasks (by title, status, due date)

### Deployment

- Deployed to a cloud service (provide URL)

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd task-management-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file based on `.env.example` and configure database and JWT secret.

4. **Database Migration:**

   Run migration scripts to set up the database schema.

   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the server:**

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3000`.

## Running Tests

1. **Run unit tests:**

   ```bash
   npm test
   ```

   This will run all unit tests and provide the test coverage report.

## API Documentation

- [Swagger API Documentation](<swagger-documentation-url>) (or Postman collection, etc.)

## Deployment

This API is deployed to <cloud-service-url>. You can access it at <api-url>.

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM)
- PostgreSQL (Database)
- JWT (JSON Web Tokens) for authentication

---
