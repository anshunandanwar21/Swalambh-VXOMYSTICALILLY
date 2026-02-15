# FraudShield India - MERN Stack

A comprehensive cybersecurity awareness and fraud reporting platform built with MERN stack (MongoDB, Express, React, Node.js).

## Project Structure

```
fraudshield-mern/
├── server/                 # Backend (Express + Node.js)
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── controllers/        # Route handlers
│   ├── middleware/        # Authentication & middlewares
│   ├── server.js          # Main server file
│   ├── package.json
│   └── .env.example
├── client/                # Frontend (React)
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── context/       # Context API
│   │   ├── styles/        # CSS files
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── README.md
└── README.md
```

## Features

- **User Authentication**: Secure login and registration with JWT
- **Fraud Reporting**: Easy-to-use forms for reporting cyber crimes
- **Dashboard**: Track submitted reports and their status
- **Cybersecurity Awareness**: Educational content about cyber threats
- **Interactive Quiz**: Test your cybersecurity knowledge
- **Community Forum**: Share experiences and learn from others
- **Fraud Heatmap**: Visualize cybercrime hotspots across India
- **Real-time Notifications**: Get updates on report status

## Tech Stack

### Frontend
- React 18
- React Router v6
- Axios for API calls
- Chart.js for data visualization

### Backend
- Node.js & Express
- MongoDB via Mongoose
- JWT for authentication
- Bcryptjs for password hashing
- CORS for cross-origin requests

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Update `.env` with your MongoDB URI and JWT secret:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fraudshield
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

5. Start the server:
```bash
npm run dev  # For development with nodemon
npm start   # For production
```

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users/profile` - Get user profile (requires auth)
- `PUT /api/users/profile` - Update user profile (requires auth)

### Reports
- `POST /api/reports` - Create new report (requires auth)
- `GET /api/reports` - Get user's reports (requires auth)
- `GET /api/reports/:id` - Get specific report (requires auth)
- `PUT /api/reports/:id/status` - Update report status (requires auth)

### Quiz
- `GET /api/quiz` - Get all quizzes
- `POST /api/quiz/submit` - Submit quiz result (requires auth)
- `GET /api/quiz/user/results` - Get user's quiz results (requires auth)

## Environment Variables

### Server (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fraudshield
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Client
The proxy is already configured in package.json to point to `http://localhost:5000`

## Running the Application

### Development Mode

Terminal 1 - Start Backend:
```bash
cd server
npm run dev
```

Terminal 2 - Start Frontend:
```bash
cd client
npm start
```

### Production Mode

1. Build the frontend:
```bash
cd client
npm run build
```

2. Start the backend (which will serve the built frontend):
```bash
cd server
npm start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For support, email: contact@fraudshield.in

---

**Stay Safe Online! Report Cyber Crimes!**
