For instructions about your task, please check the INSTRUCTIONS.md file


# Fullstack Test Project

This is a fullstack project for testing candidates. It consists of a backend built with Bun JS and Hono, and a frontend using Vite, React, TailwindCSS, and TypeScript.

## Project Structure

The project is divided into two main folders:

- `backend/`: Contains the backend code and configuration
- `frontend/`: Contains the frontend code and configuration

The root directory contains the backend's `package.json` and scripts to run it.

## Prerequisites

- [Bun](https://bun.sh/) (latest version)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install backend dependencies:

```bash
bun install
```

3. Install frontend dependencies:

```bash
cd frontend
bun install
cd ..
```

## Running the Project

### Backend

To start the backend server:

```bash
# Development mode with watch
bun dev

# Production mode
bun start
```

The backend will run on `http://localhost:3000`.

### Frontend

To start the frontend development server:

```bash
cd frontend
bun dev
```

The frontend will be available at `http://localhost:5173`.

## API Proxy

The frontend is configured with a proxy to communicate with the backend. This means you can make API calls from the frontend using the same URL, without specifying the backend port. For example:

```javascript
fetch('/api/v1/users')
```

This request will be proxied to `http://localhost:3000/api/v1/users` on the backend.

## Scripts

### Backend

- `bun format`: Format code using Biome
- `bun lint`: Lint code using Biome
- `bun start`: Start the backend server
- `bun dev`: Start the backend server in watch mode

### Frontend

- `bun dev`: Start the Vite development server
- `bun build`: Build the frontend for production
- `bun lint`: Lint the frontend code
- `bun preview`: Preview the production build

## Technologies Used

### Backend

- Bun JS
- Hono
- Zod for validation

### Frontend

- Vite
- React
- TailwindCSS
- TypeScript
- Radix UI components

