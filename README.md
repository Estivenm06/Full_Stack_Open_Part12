# Full Stack Open Part 12

This repository contains the solutions and implementations for Part 12 of the Full Stack Open course. The exercises focus on containerization and deployment using Docker and related technologies.

## Project Structure

- **FullStackOPart4-5/**: Contains solutions for exercises from Parts 4 and 5 of the course.
- **script-answers/**: Includes text files with answers to specific exercises.
- **todo-app/**: A full-stack application with separate backend and frontend services, configured for containerized development and deployment.
  - **todo-backend/**: Backend service for the Todo application.
  - **todo-frontend/**: Frontend service for the Todo application.

## Key Features

- **Backend**:
  - Built with Node.js and Express.
  - MongoDB for data persistence.
  - Redis for caching.
  - Dockerized for development and production environments.

- **Frontend**:
  - Built with React and Vite.
  - Dockerized for development and production environments.

## How to Run

### Prerequisites

- Docker and Docker Compose installed on your system.

### Development Environment

1. Navigate to the `todo-app` directory.
2. Run the following command to start the development environment:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```
3. Access the application:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:3001](http://localhost:3001)

### Production Environment

1. Navigate to the `todo-app` directory.
2. Run the following command to start the production environment:
   ```bash
   docker-compose up --build
   ```
3. Access the application:
   - Frontend: [http://localhost](http://localhost)

## Exercises

- **Part 4-5**: Solutions for exercises 12.21-12.22 are located in the `FullStackOPart4-5/` directory.
- **Part 12**: Solutions for exercises 12.1 to 12.11 are located in the `script-answers/` directory.

*Completed by: Estivenm06*
