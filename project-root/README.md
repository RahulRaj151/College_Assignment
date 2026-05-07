# Secure Password Manager using MERN Stack

## Folder Structure
- `project-root/client` React + Tailwind frontend
- `project-root/server` Node + Express + MongoDB backend

## Backend setup
```bash
cd project-root/server
cp .env.example .env
npm install
npm run dev
```

## Frontend setup
```bash
cd project-root/client
npm install
npm run dev
```

## Environment Variables
Use `server/.env.example` and define:
- `PORT`
- `MONGO_URI`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `CLIENT_URL`
- `BCRYPT_SALT_ROUNDS`

## API Routes
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/revalidate` (protected)
- `POST /api/passwords/add` (protected)
- `GET /api/passwords` (protected)
- `DELETE /api/passwords/:id` (protected)
- `POST /api/students/register`
- `GET /api/students/aggregation`

## Screenshot Description
- Login/Register glass cards on dark gradient background.
- SaaS-style dashboard with navbar + sidebar.
- Password cards with show/hide/copy/delete.
- Student form with validation messages.
- Aggregation analytics section with grouped range cards and sorted table.
