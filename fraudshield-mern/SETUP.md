# FraudShield India - MERN Stack Setup Guide

## Quick Start

### 1. First-Time Setup

```bash
# Navigate to project root
cd fraudshield-mern

# Install all dependencies
npm install
cd server && npm install && cd ..
cd client && npm install && cd ..
```

### 2. Configure Environment

```bash
# In server directory
cp .env.example .env

# Edit .env with your configuration:
# - MongoDB connection URI
# - JWT secret key
```

### 3. Start Development

**Option A: Run both server and client together**
```bash
npm run dev
```

**Option B: Run separately in different terminals**

Terminal 1 - Backend:
```bash
npm run server
```

Terminal 2 - Frontend:
```bash
npm run client
```

## Project Overview

### FraudShield India
A comprehensive cybersecurity awareness and digital fraud reporting platform for Indian citizens.

**Key Features:**
- 🔒 Secure authentication with JWT
- 📝 Easy fraud reporting system
- 📊 Dashboard to track reports
- 🎓 Cybersecurity awareness materials
- 🎮 Interactive quiz module
- 👥 Community forum
- 🗺️ Cybercrime heatmap
- 📱 Responsive design

## Project Structure

```
fraudshield-mern/
├── server/                    # Express + MongoDB Backend
│   ├── models/               # DB schemas (User, Report, Quiz)
│   ├── routes/               # API endpoints
│   ├── middleware/           # Auth & request handlers
│   ├── server.js             # Express app entry
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/       # Reusable components (Header)
│   │   ├── pages/            # Page components (Home, Login, Dashboard, etc.)
│   │   ├── context/          # Auth context for state management
│   │   ├── services/         # API service layer
│   │   ├── styles/           # Component-specific CSS
│   │   ├── App.js            # Main App component
│   │   └── index.js          # React entry point
│   ├── public/               # Static assets
│   ├── package.json
│   └── .gitignore
│
├── package.json              # Root package.json
└── README.md
```

## Backend API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Register new user
- `POST /login` - User login

### Users (`/api/users`)
- `GET /profile` - Get user profile
- `PUT /profile` - Update profile

### Reports (`/api/reports`)
- `POST /` - Create fraud report
- `GET /` - Get user's reports
- `GET /:id` - Get specific report
- `PUT /:id/status` - Update report status

### Quiz (`/api/quiz`)
- `GET /` - Get all quizzes
- `POST /submit` - Submit quiz
- `GET /user/results` - Get user results

## Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with features |
| `/login` | Login | User authentication |
| `/dashboard` | Dashboard | Report tracking |
| `/report` | Report | Create fraud report |
| `/quiz` | Quiz | Interactive quiz |
| `/awareness` | Awareness | Educational content |
| `/community` | Community | User forum |
| `/heatmap` | Heatmap | Crime visualization |
| `/about` | About | About organization |

## Database Models

### User
```
{
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  role: String (user/admin),
  createdAt: Date,
  updatedAt: Date
}
```

### Report
```
{
  userId: ObjectId,
  title: String,
  description: String,
  category: String,
  severity: String,
  location: { latitude, longitude },
  status: String,
  attachment: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Quiz
```
{
  userId: ObjectId,
  title: String,
  questions: Array,
  score: Number,
  totalQuestions: Number,
  completedAt: Date
}
```

## Technologies Used

**Frontend:**
- React 18
- React Router v6
- Axios (HTTP client)
- CSS3 (modern styling)

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT (authentication)
- Bcryptjs (password hashing)
- CORS (cross-origin support)

## Environment Variables

### Server (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fraudshield
JWT_SECRET=your_secure_jwt_secret_key_here
NODE_ENV=development
```

### Client (proxy in package.json)
```
proxy: http://localhost:5000
```

## Testing the Application

### 1. Test Authentication
```
- Visit http://localhost:3000
- Click "Login" button
- Try "Sign Up" to create new account
- Use credentials to login
```

### 2. Test Report Creation
```
- After login, go to Dashboard
- Click "Report Fraud"
- Fill out the form and submit
- Check Dashboard for the report
```

### 3. Test Quiz
```
- Go to Quiz page
- Click "Start Quiz"
- Answer questions
- View results
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check connection URI in `.env`
- Verify MongoDB is accessible

### CORS Issues
- Backend CORS is configured for `http://localhost:3000`
- Frontend proxy is set to `http://localhost:5000`
- No additional configuration needed for development

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9
```

## Next Steps

1. Set up MongoDB locally or use MongoDB Atlas
2. Configure `.env` file with your settings
3. Install dependencies in both directories
4. Run the development servers
5. Start building!

## Contributing

- Create feature branches: `git checkout -b feature/amazing-feature`
- Make your changes
- Commit: `git commit -m 'Add amazing feature'`
- Push: `git push origin feature/amazing-feature`
- Open a Pull Request

## License

MIT License - feel free to use this project

---

**Ready to protect India from cyber threats! 🛡️**
