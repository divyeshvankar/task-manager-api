---

# Task Manager API

This project is a Task Manager API built using Node.js, Express, Sequelize (with PostgreSQL), and JWT for authentication.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Tasks](#tasks)
- [Testing](#testing)
- [Deployment](#deployment)
- [Swagger Documentation](#swagger-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (signup, login) using JWT tokens
- CRUD operations for tasks (Create, Read, Update, Delete)
- Pagination for listing tasks
- Search and filter tasks by title, status, and due date
- Swagger API documentation
- Unit and integration testing setup
- Deployment to cloud services (Heroku)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or higher)
- PostgreSQL
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager-api.git
   ```

2. Install dependencies:

   ```bash
   cd task-manager-api
   npm install
   ```

## Configuration

1. Set up environment variables:

   Create a `.env` file in the root directory with the following:

   ```plaintext
   PORT=3000
   DATABASE_URL=postgres://username:password@localhost:5432/task_manager_db
   JWT_SECRET=your_jwt_secret
   ```

   Adjust values according to your environment.

## Usage

### Authentication

- **Signup**: POST `/api/signup`
  - Creates a new user with username, email, and password.

- **Login**: POST `/api/login`
  - Returns a JWT token for accessing protected routes.

### Tasks

- **Create Task**: POST `/api/tasks`
  - Requires authentication token in the `Authorization` header.

- **Get All Tasks**: GET `/api/tasks`
  - Retrieves tasks for the authenticated user.

- **Get Task by ID**: GET `/api/tasks/:id`
  - Retrieves a specific task by ID for the authenticated user.

- **Update Task**: PUT `/api/tasks/:id`
  - Updates a task by ID. Requires authentication token.

- **Delete Task**: DELETE `/api/tasks/:id`
  - Deletes a task by ID. Requires authentication token.

### Testing

To run tests:

```bash
npm test
```

### Deployment

Deploy your application to Heroku or any cloud service provider:

1. Set up a PostgreSQL database.
2. Configure environment variables on the deployment platform.
3. Deploy the application using appropriate commands (e.g., Heroku CLI).

### Swagger Documentation

Swagger API documentation is available at `/api-docs`. It provides details about API endpoints, request/response formats, and authentication requirements.

### Contributing

Contributions are welcome! Fork the repository and submit a pull request with your enhancements.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

