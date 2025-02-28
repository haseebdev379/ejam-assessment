# BobbieRule513 Dummy JSON

This project is a React + TypeScript application built with Vite. It is a template for managing users and interacting with a dummy JSON API. It uses modern tools such as Redux Toolkit, Tailwind CSS, and various React hooks.

## Table of Contents

- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
- [Configuration Files](#configuration-files)
- [Codebase Overview](#codebase-overview)
  - [Public Folder](#public-folder)
  - [Source Folder](#source-folder)
    - [Components](#components)
    - [Lib Folder](#lib-folder)
    - [Pages](#pages)
  - [Root Files](#root-files)

---

## Directory Structure

```
.
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.*.json
├── vite.config.ts
├── .env.example
├── .prettierrc
├── public/
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── components/
    ├── lib/
    └── pages/
```

---

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/bobbierule513-dummy-json.git
   cd bobbierule513-dummy-json
   ```
2. Install dependencies:
   ```bash
   yarn or npm install
   ```

### Running the Project

- Development:
  ```bash
   yarn dev or npm run dev
  ```
- Build:
  ```bash
  yarn build or npm run build
  ```

---

## Configuration Files

### `.env.example`

Defines environment variables. Update these values in your `.env` file:

```env
VITE_API_BASE_URL='https://dummyjson.com'
```

### `eslint.config.js`

Defines linting rules for JavaScript, TypeScript, and React, including hooks and fast refresh rules.

### `tailwind.config.js`

Configures Tailwind CSS to scan specific files for class names and extends the theme with custom colors.

---

## Codebase Overview

### Public Folder

Contains static assets and the `index.html` file that serves as the entry point for the application.

### Source Folder

#### Components

Reusable UI components are organized into subdirectories:

- **Button**: A customizable button component supporting different variants and icons.
- **Data Not Found**: Displays a message when no data is available.
- **Error Boundary**: Catches and handles runtime errors gracefully.
- **Input**: A styled input field with optional icons.
- **Modal**: A responsive modal dialog component.
- **Pagination**: A pagination component with support for skeleton loading.
- **Table**: Components for building accessible and styled tables.
- **Users**: Components for displaying user details, lists, and skeleton loaders.

#### Lib Folder

Utility and helper code are stored here:

- **Config**: Configuration files for Axios and environment variables.
- **Constants**: Contains static values like `ROUTES` and `REQUEST_TIMEOUT`.
- **Hooks**: Custom React hooks, e.g., for Redux and debouncing.
- **Services**: API service functions for user-related operations.
- **Store**: Redux store setup with a `usersSlice` for managing users state.
- **Types**: TypeScript interfaces for users, companies, and related entities.

#### Pages

- **404**: A page to display when a route is not found.
- **Users**: Main page for user management, including a search bar and paginated user list.

---

### Root Files

- **`App.tsx`**: The main application component. Sets up routing with lazy loading for pages.
- **`index.css`**: Includes Tailwind CSS imports for global styling.
- **`main.tsx`**: Entry point for rendering the React app with Redux and an error boundary.

---

## Features

1. **User Management**: Search and paginate through users with details fetched from the dummy JSON API.
2. **Error Handling**: Global error boundary for catching unexpected errors.
3. **Pagination**: Intuitive pagination controls with skeleton loading.
4. **Axios Configuration**: Centralized Axios instance with request/response interceptors.
5. **Reusable Components**: Modular components for inputs, tables, and modals.
6. **Tailwind CSS**: Utility-first styling for rapid development.
7. **Redux Toolkit**: State management with a slice for users.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add your feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Create a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
