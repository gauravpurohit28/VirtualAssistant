# Virtual Assistant

A customizable AI-powered virtual assistant that can perform basic tasks, answer questions, and interact with users via voice commands. Users can personalize their assistant's name and image, and the assistant can perform web searches, play YouTube videos, tell the date/time, and more.

---

## Features

- **Voice-activated AI Assistant**: Interact using natural language and voice.
- **Customizable**: Set your assistant's name and image.
- **Authentication**: Secure sign up, sign in, and session management.
- **Task Automation**: Google/YouTube search, play videos, open calculator, show weather and more.
- **Personalized Experience**: Each user has their own assistant and history.

---

## Tech Stack

### Frontend
- React (with Vite)
- React Router
- Tailwind CSS
- Axios

### Backend
- Node.js + Express
- MongoDB (via Mongoose)
- JWT Authentication
- Cloudinary (for image uploads)
- Gemini API (for AI assistant logic)
- Multer (file uploads)

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)
- Cloudinary account (for image uploads)
- Gemini API access (for AI responses)

### Environment Variables

Create a `.env` file in `backend/` with:
```
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
GEMINI_API_URL=your_gemini_api_endpoint
PORT=8000

---

## Installation & Running

### 1. Backend
```bash
cd backend
npm install
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173) and the backend on [http://localhost:8000](http://localhost:8000) by default.

---

## Usage

1. **Sign Up**: Register with your name, email, and password.
2. **Customize**: Choose or upload an image and set your assistant's name.
3. **Interact**: Use your voice to ask questions or give commands. The assistant can:
   - Answer general questions
   - Search Google or YouTube
   - Play YouTube videos
   - Tell the current date, time, day, or month
   - Open calculator, Instagram, Facebook, show weather.
4. **Logout/Login**: Secure session management.

---

## API Overview

### Auth Endpoints
- `POST /api/auth/signup` — Register a new user
- `POST /api/auth/signin` — Login
- `GET /api/auth/logout` — Logout

### User Endpoints
- `GET /api/user/current` — Get current user info
- `POST /api/user/update` — Update assistant name/image
- `POST /api/user/asktoassistant` — Send a command to the assistant

---

## Customization
- On first login, you can select a pre-defined image or upload your own for your assistant.
- Set a unique assistant name.
- These settings are saved per user and can be updated anytime.

---

## Project Structure

```
VirtualAssistant/
  backend/      # Express API, AI logic, DB models, config
  frontend/     # React app, UI, pages, assets
```

---

## License

Gaurav Purohit
