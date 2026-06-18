# Expense Tracker

A full-stack Expense Tracker app with a Node/Express + MongoDB backend and a React + Vite frontend.  
Quickly track income and expenses, upload profile photos, and export transactions to Excel.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [API Overview](#api-overview)
- [Important files / symbols](#important-files--symbols)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- User registration and login with JWT authentication
- Add, list, delete income and expense entries
- Dashboard with summary metrics, recent transactions and charts
- Upload user profile image
- Export income/expense as Excel files
- Client-side charts (Recharts) and emoji/icon picker for transaction icons

---

## Tech Stack
- Backend: Node.js, Express, MongoDB (Mongoose)
- Frontend: React, Vite, Tailwind CSS, Recharts
- File uploads: multer
- Excel generation: xlsx
- Auth: jsonwebtoken, bcryptjs

---

## Prerequisites
- Node.js (>= 16)
- npm or yarn
- MongoDB (local or Atlas)

---

## Setup

Clone repo and install dependencies at workspace root.

Backend
1. cd backend
2. npm install
3. Create a `.env` with required vars (see [Environment Variables](#environment-variables))
4. Start server:
   - Development: `npm run dev` (uses nodemon)
   - Production: `npm start`

Frontend
1. cd frontend/expense-tracker
2. npm install
3. Create `.env` or set Vite variable `VITE_API_URL` if your backend isn't on default
4. Start dev server:
   - `npm run dev` (Vite)

---

## Environment Variables

Create a `.env` in `backend/` with:
- MONGO_URI=your_mongo_connection_string
- JWT_SECRET=your_jwt_secret
- CLIENT_URL=http://localhost:5173 (optional, used for CORS)

The frontend reads the API base from `import.meta.env.VITE_API_URL` (see [apiPaths](frontend/expense-tracker/src/utils/apiPaths.js)).

---

## Scripts

Root workspace contains separate package.json files:
- Backend scripts: see [backend/package.json](backend/package.json)
- Frontend scripts: see [frontend/expense-tracker/package.json](frontend/expense-tracker/package.json)

Examples:
- Start backend dev server:
  - cd backend && npm run dev
- Start frontend dev server:
  - cd frontend/expense-tracker && npm run dev

---

## API Overview (important endpoints)

Auth
- POST /api/v1/auth/register — register new user (see [`registerUser`](backend/controllers/authController.js))
- POST /api/v1/auth/login — login (see [`loginUser`](backend/controllers/authController.js))
- GET /api/v1/auth/getUser — get current user (protected) (see [`getUserInfo`](backend/controllers/authController.js))
- POST /api/v1/auth/upload-image — upload profile image (route uses [`upload`](backend/middleware/uploadMiddleware.js))

Income
- POST /api/v1/income/add — add income (protected) (see [`addIncome`](backend/controllers/incomeController.js))
- GET /api/v1/income/get — list income items (protected) (see [`getAllIncome`](backend/controllers/incomeController.js))
- DELETE /api/v1/income/:id — delete income (protected) (see [`deleteIncome`](backend/controllers/incomeController.js))
- GET /api/v1/income/downloadexcel — download income as Excel (see [`downloadIncomeExcel`](backend/controllers/incomeController.js))

Expense
- POST /api/v1/expense/add — add expense (protected) (see [`addExpense`](backend/controllers/expenseController.js))
- GET /api/v1/expense/get — list expenses (protected) (see [`getAllExpense`](backend/controllers/expenseController.js))
- DELETE /api/v1/expense/:id — delete expense (protected) (see [`deleteExpense`](backend/controllers/expenseController.js))
- GET /api/v1/expense/downloadExcel — download expenses as Excel (see [`downloadExpenseExcel`](backend/controllers/expenseController.js))

Dashboard
- GET /api/v1/dashboard — aggregated dashboard data (protected) (see [`getDashboardData`](backend/controllers/dashboardController.js))

Auth middleware
- [`protect`](backend/middleware/authMiddleware.js) validates JWT and attaches user to `req.user`.

Server entry:
- [backend/server.js](backend/server.js)

Database connection:
- [`connectDB`](backend/config/db.js) — connects to MongoDB

---

## Important files / symbols (quick links)
- Backend
  - [backend/server.js](backend/server.js)
  - [`connectDB`](backend/config/db.js) — [backend/config/db.js](backend/config/db.js)
  - Auth controller: [`registerUser`](backend/controllers/authController.js), [`loginUser`](backend/controllers/authController.js), [`getUserInfo`](backend/controllers/authController.js) — [backend/controllers/authController.js](backend/controllers/authController.js)
  - Upload middleware: [`upload`](backend/middleware/uploadMiddleware.js) — [backend/middleware/uploadMiddleware.js](backend/middleware/uploadMiddleware.js)
  - Income controller: [`addIncome`](backend/controllers/incomeController.js), [`getAllIncome`](backend/controllers/incomeController.js), [`downloadIncomeExcel`](backend/controllers/incomeController.js) — [backend/controllers/incomeController.js](backend/controllers/incomeController.js)
  - Expense controller: [`addExpense`](backend/controllers/expenseController.js), [`getAllExpense`](backend/controllers/expenseController.js), [`downloadExpenseExcel`](backend/controllers/expenseController.js) — [backend/controllers/expenseController.js](backend/controllers/expenseController.js)
  - Dashboard controller: [`getDashboardData`](backend/controllers/dashboardController.js) — [backend/controllers/dashboardController.js](backend/controllers/dashboardController.js)
  - Auth middleware: [`protect`](backend/middleware/authMiddleware.js) — [backend/middleware/authMiddleware.js](backend/middleware/authMiddleware.js)

- Frontend (Expense Tracker app)
  - App entry: [frontend/expense-tracker/src/main.jsx](frontend/expense-tracker/src/main.jsx) and [frontend/expense-tracker/src/App.jsx](frontend/expense-tracker/src/App.jsx)
  - API helpers:
    - [`axiosInstance`](frontend/expense-tracker/src/utils/axiosInstance.js) — [frontend/expense-tracker/src/utils/axiosInstance.js](frontend/expense-tracker/src/utils/axiosInstance.js)
    - [`API_PATHS`](frontend/expense-tracker/src/utils/apiPaths.js) — [frontend/expense-tracker/src/utils/apiPaths.js](frontend/expense-tracker/src/utils/apiPaths.js)
    - Image upload helper: [frontend/expense-tracker/src/utils/uploadImage.js](frontend/expense-tracker/src/utils/uploadImage.js)
  - Auth & user:
    - [`useUserAuth`](frontend/expense-tracker/src/hooks/useUserAuth.jsx) — [frontend/expense-tracker/src/hooks/useUserAuth.jsx](frontend/expense-tracker/src/hooks/useUserAuth.jsx)
    - [`UserContext`](frontend/expense-tracker/src/context/UserContext.jsx) — [frontend/expense-tracker/src/context/UserContext.jsx](frontend/expense-tracker/src/context/UserContext.jsx)
    - Profile image selector: [frontend/expense-tracker/src/components/Inputs/ProfilePhotoSelector.jsx](frontend/expense-tracker/src/components/Inputs/ProfilePhotoSelector.jsx)
  - Pages:
    - Dashboard Home: [frontend/expense-tracker/src/pages/Dashboard/Home.jsx](frontend/expense-tracker/src/pages/Dashboard/Home.jsx)
    - Income page: [frontend/expense-tracker/src/pages/Dashboard/Income.jsx](frontend/expense-tracker/src/pages/Dashboard/Income.jsx)
    - Expense page: [frontend/expense-tracker/src/pages/Dashboard/Expense.jsx](frontend/expense-tracker/src/pages/Dashboard/Expense.jsx)
    - Auth pages: [frontend/expense-tracker/src/pages/Auth/Login.jsx](frontend/expense-tracker/src/pages/Auth/Login.jsx), [frontend/expense-tracker/src/pages/Auth/SignUp.jsx](frontend/expense-tracker/src/pages/Auth/SignUp.jsx)
  - Charts and UI components – see `src/components/` (charts: [CustomPieChart](frontend/expense-tracker/src/components/Charts/CustomPieChart.jsx), [CustomBarChart](frontend/expense-tracker/src/components/Charts/CustomBarChart.jsx), [CustomLineChart](frontend/expense-tracker/src/components/Charts/CustomLineChart.jsx))

---

## Notes & Tips
- Excel download endpoints generate files on the server and then call `res.download(...)`. Ensure the server has write permission or adjust to stream content in memory if preferred (e.g., use `xlsx.write` to buffer).
- Uploaded profile images are served from `/uploads` via `express.static` (see [backend/server.js](backend/server.js)).
- The frontend automatically sets Authorization header using [`axiosInstance`](frontend/expense-tracker/src/utils/axiosInstance.js).

---
