# Portfolio

A personal portfolio web application with a React frontend and a Spring Boot backend. The site includes public portfolio pages, a login page, and a protected admin area.

## Project structure

```text
portfolio/
├── backend/   # Java 21, Spring Boot, Maven
└── frontend/  # React, Vite
```

## Tech stack

- **Frontend:** React, React Router, Vite, Tailwind CSS
- **Backend:** Java 21, Spring Boot, Spring Security, Spring Data JPA
- **Database:** PostgreSQL
- **Authentication:** JWT
- **API documentation:** Springdoc OpenAPI
- **Deployment support:** Docker for the backend; Vercel rewrite configuration for the frontend

## Features

- Public portfolio pages, including sections for projects, skills, education, and contact
- Login page and protected admin page
- REST backend with PostgreSQL persistence
- JWT-based authentication
- Contact and email configuration

## Prerequisites

- Node.js and npm
- Java 21
- Docker and Docker Compose (optional, for running the backend in a container)
- A PostgreSQL database

## Run locally

### 1. Configure the backend

The backend uses environment variables for database and application settings. Create a `.env` file in the repository root, which is loaded by the local Spring configuration:

```dotenv
DB_URL=jdbc:postgresql://localhost:5432/portfolio
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password
JWT_SECRET=replace_with_a_secure_secret
PORTFOLIO_CONTACT_EMAIL=you@example.com
```

Use appropriate values for your environment. Keep secrets out of version control.

### 2. Start the backend

From the repository root:

```bash
cd backend
./mvnw spring-boot:run
```

On Windows, use:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend is configured to run on port `8080`.

### 3. Start the frontend

In another terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Build and checks

### Frontend

```bash
cd frontend
npm run build
npm run lint
```

### Backend

```bash
cd backend
./mvnw test
./mvnw package
```

## Run the backend with Docker Compose

The Compose configuration is in `backend/docker-compose.yml`. From the `backend` directory, configure the environment variables referenced by that file, then run:

```bash
docker compose up --build
```

The backend container listens on port `8080`.

## Deployment notes

- The frontend includes a Vercel rewrite so client-side routes resolve to `index.html`.
- The backend includes a Dockerfile and a production Spring profile.
- Configure database credentials, JWT secrets, email settings, allowed frontend origins, and other deployment-specific values through your hosting environment. Do not commit credentials.

## License

No license is currently specified. Contact the repository owner before redistributing or reusing this project.
