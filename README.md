# 🌿 Calmspace

Calmspace is a modern web application designed to help users find peace, relaxation, and focus.  
It provides guided sessions, mood tracking, and personalized recommendations — all powered by *Supabase* for authentication and backend services.

---

## 🚀 Features
- 🔑 Secure authentication (login, signup, logout) using Supabase
- 👤 User session management with React Context
- 🧘 Guided relaxation and meditation sessions (planned)
- 📊 Mood tracking dashboard (planned)
- 📱 Responsive UI for mobile and desktop

---

## 🛠 Tech Stack
- *Frontend:* React + TypeScript + Vite
- *Backend:* Supabase (Postgres, Auth, APIs)
- *Auth:* Supabase Auth (Email & Password)
- *Styling:* TailwindCSS (or your chosen UI library)

---

## 📂 Project Structure

calmspace/
├── src/
│ ├── AuthContext.tsx # Handles user auth & context
│ ├── supabaseClient.ts # Supabase client setup
│ ├── components/ # UI components
│ ├── pages/ # App pages
│ └── App.tsx # Main entry point
├── public/ # Static assets
├── .env # Environment variables (not committed)
├── package.json
└── README.md 
