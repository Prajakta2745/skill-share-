# SkillShare AI - Frontend

Modern React frontend for the SkillShare AI platform - an AI-powered skill sharing marketplace.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (40+ components)
- **State Management**: React Query
- **Routing**: React Router
- **Animation**: Framer Motion
- **Forms**: React Hook Form
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```sh
# Clone the repository
git clone https://github.com/Prajakta2745/skill-share-.git

# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080/`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build with development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Auth.tsx        # Authentication
│   ├── Dashboard.tsx   # User dashboard
│   ├── Explore.tsx     # Skill exploration
│   ├── Community.tsx   # Community hub
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Root component
└── main.tsx            # Entry point
```

## Features

- 🎓 Skill discovery and exploration
- 👥 Community engagement
- 📊 User dashboard
- 🔐 Authentication system
- 💬 In-app messaging
- 📅 Booking system
- 🎨 Modern, responsive UI
- 🌙 Dark mode support

## Development

The frontend communicates with the NestJS backend API running on `http://localhost:3000/`

Key API endpoints:
- `/home/hero` - Hero section content
- `/home/skills` - Skills listing
- `/home/testimonials` - User testimonials
- `/home/why-choose` - Why choose us content
- `/auth/register` - User registration
- `/auth/login` - User login

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist/` directory and can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## License

This project is part of the SkillShare AI platform.
