# We Make Corder

> A simple learning & counseling platform consisting of a React + Vite frontend and an Express + MongoDB backend.

## Project structure
- `frontend/` – React app (Vite). Contains UI, pages, components and Vercel config.
- `backend/` – Express API, MongoDB models, controllers and seed script.

## Features
- Browse learning paths
- Request counseling
- Simple REST API for learning paths and counseling

## Tech stack
- Frontend: React 18, Vite
- Backend: Node.js, Express, Mongoose
- Database: MongoDB

## Prerequisites
- Node.js and npm
- A MongoDB URI (MongoDB Atlas or local)

## Local development

1. Frontend

```powershell
cd frontend
npm install
# dev server
npm run dev
# build for production
npm run build
# preview the production build
npm run preview
```

2. Backend

```powershell
cd backend
npm install
# set env var (PowerShell example)
$env:MONGO_URI="your-mongo-uri"
# run in dev with nodemon
npm run dev
# run seed if you want to populate initial data
npm run seed
```

## Environment variables
- `MONGO_URI` – MongoDB connection string (required for backend)
- `PORT` – optional server port (defaults to 3000)

## API (quick)
- `GET /` – API health message
- `/api/learning-paths` – learning paths endpoints (see `backend/routes/learningRoutes.js`)
- `/api/counseling` – counseling endpoints (see `backend/routes/counselingRoutes.js`)

## Deployment notes
- Frontend: Vercel works well. Ensure the project runs `npm run build` and serves the `dist` output. `vercel.json` currently rewrites all routes to `index.html` for SPA routing.
- Backend: Host on a Node-capable host (Railway, Render, Heroku, etc.) and set `MONGO_URI` in the environment.
- If frontend and backend are separate, update API base URLs in the frontend where applicable and enable CORS on the backend (already enabled).

## Contributing
Feel free to open issues or create pull requests. For questions, run the app locally and check console logs for quick diagnostics.

---
Created automatically — modify as needed.
