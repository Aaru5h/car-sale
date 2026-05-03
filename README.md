# AutoHaul 🚗

AutoHaul is a premium car sales and transport platform built with a cutting-edge technology stack. It features a high-performance frontend with immersive animations and a robust backend architecture.

## 🚀 Features

- **Immersive UI/UX**: Built with React 19 and Next.js 16.
- **Dynamic Animations**: Smooth transitions and interactive elements using Framer Motion and Lenis scroll.
- **3D Integration**: High-fidelity 3D renderings and interactions powered by Three.js.
- **Modern Styling**: Utility-first styling with Tailwind CSS v4.
- **Type Safe**: Fully written in TypeScript for enhanced developer experience and reliability.

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, Lenis
- **3D Graphics**: Three.js / @types/three
- **Language**: TypeScript

### Backend
- **Runtime**: Node.js
- **Environment**: Nodemon for development

## 📁 Project Structure

```text
AutoHaul/
├── frontend/          # Next.js web application
│   ├── app/           # App router components and pages
│   ├── components/    # Reusable UI components
│   └── public/        # Static assets
└── backend/           # Node.js server and API logic
```

## ⚙️ Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AutoHaul
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Setup Backend**
   ```bash
   cd ../backend
   npm install
   # Start the server (ensure main entry point is configured)
   npm start
   ```

## 📝 License

This project is licensed under the ISC License.
