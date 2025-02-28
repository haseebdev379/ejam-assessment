# Superhero Team Management System

A full-stack application for tracking team members' superpowers and humility scores. This project consists of a NestJS backend API and a React frontend built with TypeScript and Vite.

## Project Overview

This application allows users to:

- Add new superheroes with their unique powers and humility scores
- View a list of superheroes sorted by their humility scores
- Validate superhero data with built-in constraints

## Table of Contents

- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Using entry.sh Script](#using-entrysh-script)
- [Manual Setup](#manual-setup)
  - [Using entry.sh Script](#using-entrysh-script)
- [Frontend](#frontend)
- [Backend](#backend)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)
- [Frontend](#frontend)
- [Backend](#backend)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)

## Architecture

The project follows a client-server architecture:

```
┌─────────────────┐      HTTP      ┌─────────────────┐
│                 │    Requests    │                 │
│  React Frontend │ ◄────────────► │  NestJS Backend │
│    (Port 3001)  │                │    (Port 3000)  │
└─────────────────┘                └─────────────────┘
```

### Frontend Architecture

The frontend follows a component-based architecture using React with the following key patterns:

- **Component-Based Structure**: UI elements are broken down into reusable components
- **React Hooks**: For state management and side effects
- **React Router**: For client-side routing
- **Tailwind CSS**: For utility-first styling
- **TypeScript**: For type safety

### Backend Architecture

The backend follows NestJS's modular architecture:

- **Module-Based Structure**: Code is organized into feature modules
- **Controller-Service Pattern**: Controllers handle HTTP requests, services contain business logic
- **DTO Validation**: Using class-validator for input validation
- **In-Memory Data Storage**: Currently using arrays for data persistence

## Tech Stack

### Frontend

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Axios

### Backend

- NestJS
- TypeScript
- Jest for testing
- class-validator for DTO validation

## Project Structure

```
.
├── frontend/                # React frontend application
│   ├── public/              # Static assets
│   ├── src/                 # Source code
│   │   ├── components/      # Reusable UI components
│   │   ├── constants/       # Application constants
│   │   ├── lib/             # Utility functions and services
│   │   ├── pages/           # Page components
│   │   ├── types/           # TypeScript type definitions
│   │   ├── App.tsx          # Main application component
│   │   └── main.tsx         # Application entry point
│   ├── package.json         # Frontend dependencies
│   └── vite.config.ts       # Vite configuration
│
└── backend/                 # NestJS backend application
    ├── src/                 # Source code
    │   ├── superheroes/     # Superheroes module
    │   │   ├── superhero.dto.ts           # Data transfer objects
    │   │   ├── superheroes.controller.ts  # HTTP request handlers
    │   │   ├── superheroes.service.ts     # Business logic
    │   │   └── superheroes.module.ts      # Module definition
    │   ├── app.module.ts    # Main application module
    │   └── main.ts          # Application entry point
    └── package.json         # Backend dependencies
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
### Manual Setup

If you prefer to set up the project manually, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/haseebdev379/ejam-assessment.git
   cd ejam-test
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

4. Start the backend server:

   ```bash
   cd ../backend
   npm run start:dev
   ```

5. Start the frontend development server:
   ```bash
   cd ../frontend
   npm run dev
   ```

The frontend will be available at `http://localhost:3001` and the backend at `http://localhost:3000`.

## Frontend

The frontend is a React application built with TypeScript and Vite. It uses React Router for navigation and Tailwind CSS for styling.

### Key Components

- **SuperheroesPage**: Main page that displays the list of superheroes and provides a form to add new ones
- **SuperheroForm**: Form component for adding new superheroes
- **Modal**: Reusable modal component for displaying forms and other content

### State Management

The application uses React's built-in state management with `useState` and `useEffect` hooks for managing component state and side effects.

## Backend

The backend is a NestJS application that provides a RESTful API for managing superheroes.

### Modules

- **SuperheroesModule**: Contains controllers and services for managing superheroes

### Data Validation

The application uses class-validator to validate incoming data:

- Name and superpower must be strings
- Humility score must be an integer between 1 and 10

### Data Storage

Currently, the application uses in-memory storage (arrays) to store superhero data. In a production environment, this would be replaced with a database.

## API Endpoints

### POST /superheroes

Create a new superhero

**Request Body:**

```json
{
    "alias": "string",
    "specialAbility": "string",
    "modestRating": number
}
```

**Response:**

```json
{
  "message": "Superhero added successfully!"
}
```

### GET /superheroes


**Response:**

```json
[
  {
    "alias": "string",
    "specialAbility": "string",
    "modestRating": number
  }
]
```

## Future Improvements

### Technical Enhancements

- Add database integration (PostgreSQL or MongoDB)
- Implement authentication/authorization
- Add Swagger API documentation
- Set up CI/CD pipeline
- Add comprehensive testing

### Feature Ideas

- Add superhero teams functionality
- Implement superhero achievements
- Add profile images support
- Create statistics dashboard
- Add search and filtering capabilities

### Performance & Security

- Add rate limiting
- Implement caching
