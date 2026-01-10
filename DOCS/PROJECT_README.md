# SkillShare AI 🎓

**An AI-powered platform for skill sharing, mentorship, and community learning.**

SkillShare AI connects learners with mentors across various domains including programming, music, art, design, business, and more. Powered by artificial intelligence, it provides personalized skill discovery, smart matching, and an engaging community experience.

![Status](https://img.shields.io/badge/status-active-success)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🌟 Features

### For Learners
- 🎯 **Smart Skill Discovery** - AI-powered recommendations based on interests and goals
- 👥 **Expert Matching** - Find the perfect mentor for your learning journey
- 📚 **Structured Learning** - Organized lessons, tutorials, and resources
- 💬 **Direct Communication** - Chat with mentors and peers in real-time
- 📊 **Progress Tracking** - Monitor your learning progress with detailed analytics
- 🏆 **Achievements** - Earn badges and certifications as you progress

### For Mentors
- 🎨 **Profile Customization** - Showcase your expertise and experience
- 📅 **Booking System** - Manage sessions and availability easily
- 💰 **Monetization** - Earn from sharing your knowledge
- 📈 **Student Analytics** - Track student progress and engagement
- 🔔 **Smart Notifications** - Stay updated on student activities

### Platform Features
- 🌍 **Global Community** - Connect with learners and mentors worldwide
- 🔐 **Secure Authentication** - JWT-based authentication system
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🌙 **Dark Mode** - Eye-friendly dark theme option
- ⚡ **High Performance** - Optimized for speed and reliability
- 🔄 **Real-time Updates** - Instant notifications and live chat

---

## 🏗️ Project Structure

```
skill-share-ai/
├── frontend/                 # React + TypeScript frontend application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── App.tsx         # Root component
│   │   └── main.tsx        # React entry point
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.ts      # Vite configuration
│   ├── tailwind.config.ts  # Tailwind CSS setup
│   └── README.md           # Frontend documentation
│
├── backend/                  # NestJS + MongoDB backend
│   ├── src/
│   │   ├── modules/        # Feature modules (auth, home, users)
│   │   ├── config/         # Configuration files
│   │   ├── app.module.ts   # Root NestJS module
│   │   └── main.ts         # Backend entry point
│   ├── package.json        # Backend dependencies
│   ├── nest-cli.json       # NestJS CLI config
│   ├── .env                # Environment variables
│   └── README.md           # Backend documentation
│
├── START.bat               # Windows startup script
├── START.sh                # Unix/Mac startup script
└── README.md               # This file
```

---

## 💻 Tech Stack

### Frontend
- **React 18** - UI library for building user interfaces
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React component library
- **React Router** - Client-side routing
- **React Query** - Server state management
- **Framer Motion** - Animation library
- **React Hook Form** - Efficient form handling
- **Zod** - TypeScript-first schema validation

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe backend development
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **Passport** - Authentication middleware
- **Bcrypt** - Password hashing

### Development Tools
- **Git** - Version control
- **npm/yarn** - Package management
- **ESLint** - Code linting
- **PostCSS** - CSS processing

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18 or higher
- **npm** or **yarn** package manager
- **MongoDB** (local or Atlas)
- **Git**

### Installation & Setup

#### Option 1: Using Startup Scripts (Recommended for Windows/Mac)

**Windows:**
```batch
START.bat
```

**macOS/Linux:**
```bash
bash START.sh
```

#### Option 2: Manual Setup

**1. Clone the Repository**
```bash
git clone https://github.com/Prajakta2745/skill-share-.git
cd skill-share-
```

**2. Setup Backend**
```bash
cd backend

# Install dependencies
npm install

# Configure environment variables
# Edit .env file with your MongoDB URI and other settings

# Start the backend server (development mode)
npm run start:dev
```

The backend will run on `http://localhost:3000`

**3. Setup Frontend**
```bash
cd ../frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:8080`

**4. Access the Application**
Open your browser and navigate to `http://localhost:8080`

---

## 📚 Available Scripts

### Backend
```bash
npm run start          # Start the application
npm run start:dev      # Start with auto-reload (development)
npm run build         # Build for production
npm run test          # Run tests
npm run lint          # Run ESLint
```

### Frontend
```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run build:dev     # Build with development mode
npm run lint          # Run ESLint
npm run preview       # Preview production build
```

---

## 🔧 Environment Configuration

### Backend (.env)
```env
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/skill-connect

# Server Configuration
PORT=3000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here

# Other configurations as needed
```

### Frontend (.env)
Frontend uses environment variables from Vite:
```env
VITE_API_URL=http://localhost:3000
```

---

## 📱 Features in Detail

### Authentication System
- User registration with email verification
- Secure login with JWT tokens
- Password reset functionality
- Two-factor authentication (ready for implementation)

### Skill Marketplace
- Browse and search available skills
- Filter by category, level, and ratings
- View detailed skill descriptions
- Read mentor reviews and testimonials

### Booking & Scheduling
- Calendar-based availability system
- Real-time booking confirmation
- Automated reminders
- Cancellation policies

### Communication
- Real-time messaging system
- Video call integration (ready for implementation)
- Discussion forums
- Notifications and alerts

### Analytics & Progress
- Learning progress dashboard
- Performance metrics
- Completion certificates
- Learning history

---

## 🔐 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt for secure password storage
- **HTTPS Ready** - SSL/TLS support for production
- **CORS Configuration** - Cross-origin request handling
- **Rate Limiting** - Protection against brute-force attacks
- **Input Validation** - Zod schema validation

---

## 📊 API Documentation

### Key Endpoints

#### Home Module
- `GET /home/hero` - Get hero section content
- `GET /home/skills` - Get all skills
- `GET /home/testimonials` - Get user testimonials
- `GET /home/why-choose` - Get why-choose-us content
- `GET /home/all` - Get all home content

#### Authentication Module
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/skill-share-.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Write clean, documented code
   - Follow the existing code style
   - Add tests for new features

4. **Commit Your Changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

5. **Push to Your Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Reference any related issues
   - Ensure all tests pass

---

## 📋 Project Status

### ✅ Completed
- [x] Basic project structure
- [x] Frontend React setup with TypeScript
- [x] Backend NestJS setup
- [x] MongoDB integration
- [x] Authentication system
- [x] Home module and content endpoints
- [x] User registration and login
- [x] Responsive UI design
- [x] Dark mode support

### 🔄 In Progress
- [ ] Real-time messaging system
- [ ] Video call integration
- [ ] Payment system integration
- [ ] Advanced AI recommendations

### 📅 Planned
- [ ] Mobile application (React Native)
- [ ] Admin dashboard
- [ ] Analytics and reporting
- [ ] Internationalization (i18n)
- [ ] API rate limiting
- [ ] Email notifications

---

## 📦 Deployment

### Frontend Deployment
The frontend can be deployed to:
- **Vercel** (recommended for Vite apps)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Google Cloud Storage**
- **Azure Static Web Apps**

Build command:
```bash
npm run build
```

Output directory: `dist/`

### Backend Deployment
The backend can be deployed to:
- **Heroku**
- **Railway**
- **Render**
- **AWS EC2**
- **Google Cloud Run**
- **Azure App Service**
- **DigitalOcean**

---

## 📖 Documentation

- **Frontend Docs**: See [frontend/README.md](./frontend/README.md)
- **Backend Docs**: See [backend/README.md](./backend/README.md)
- **API Reference**: [API Documentation](./backend/README.md#api-documentation)

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows - Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux - Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### MongoDB Connection Issues
```bash
# Ensure MongoDB is running
mongosh

# Update MONGO_URI in .env file
MONGO_URI=mongodb://localhost:27017/skill-connect
```

### Dependency Issues
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Support

Need help? Here are your options:

- 📧 **Email**: support@skillshare.ai
- 💬 **Issues**: [GitHub Issues](https://github.com/Prajakta2745/skill-share-/issues)
- 📱 **Discord**: [Join our community](https://discord.gg/skillshare)
- 📚 **Wiki**: [Project Wiki](https://github.com/Prajakta2745/skill-share-/wiki)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **shadcn/ui** - For the beautiful component library
- **Tailwind CSS** - For the utility-first CSS framework
- **NestJS** - For the progressive Node.js framework
- **MongoDB** - For the scalable NoSQL database
- **React** - For the powerful UI library
- All contributors and community members

---

## 🔗 Links

- **Repository**: https://github.com/Prajakta2745/skill-share-
- **Issues**: https://github.com/Prajakta2745/skill-share-/issues
- **Discussions**: https://github.com/Prajakta2745/skill-share-/discussions

---

**Made with ❤️ by the SkillShare AI Team**

**Last Updated**: January 11, 2026
**Version**: 1.0.0
