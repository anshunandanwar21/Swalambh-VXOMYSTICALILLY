# 🚀 FraudShield MERN - Quick Start Guide

## ⚠️ Prerequisites Check

Before running the application, you MUST have:

### 1. **Node.js** (REQUIRED)
   - **Download**: https://nodejs.org/
   - **Version**: LTS (Long Term Support) - currently v20 or v22
   - **Installation**: Run the installer and accept all defaults
   - **Verify**: Open Command Prompt and run:
     ```cmd
     node --version
     npm --version
     ```

### 2. **MongoDB** (REQUIRED)
   - **Option A - Local Installation**:
     - Download: https://www.mongodb.com/try/download/community
     - Install and ensure service is running
   
   - **Option B - Cloud (Recommended for testing)**:
     - Go to: https://www.mongodb.com/cloud/atlas
     - Sign up for free account
     - Create a free cluster
     - Get connection string

---

## 🎯 Installation & Startup

### **Method 1: Using Batch Script (Windows)**

1. **Navigate to project folder**:
   ```cmd
   cd c:\Users\ANSHU\Desktop\SWALAMBH\fraudshield-mern
   ```

2. **Run the setup script**:
   ```cmd
   RUN.bat
   ```
   
   This will:
   - ✅ Check for Node.js
   - ✅ Install all dependencies
   - ✅ Create `.env` file
   - ✅ Start both servers automatically

---

### **Method 2: Manual Command Line**

1. **Install server dependencies**:
   ```cmd
   cd c:\Users\ANSHU\Desktop\SWALAMBH\fraudshield-mern\server
   npm install
   cd ..
   ```

2. **Install client dependencies**:
   ```cmd
   cd c:\Users\ANSHU\Desktop\SWALAMBH\fraudshield-mern\client
   npm install
   cd ..
   ```

3. **Create `.env` file** (create in `server` folder):
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/fraudshield
   JWT_SECRET=your_jwt_secret_key_change_this_later
   NODE_ENV=development
   ```

4. **Start development servers**:
   
   **Option A** - Both at once (from project root):
   ```cmd
   npm run dev
   ```

   **Option B** - Separate terminals:
   
   Terminal 1 (Backend):
   ```cmd
   cd server
   npm run dev
   ```
   
   Terminal 2 (Frontend):
   ```cmd
   cd client
   npm start
   ```

---

## 📍 Access the Application

Once running:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

---

## 🔧 Environment Configuration

### Update `.env` if using MongoDB Atlas

If you're using MongoDB Atlas instead of local MongoDB:

1. Open `server\.env`
2. Find the line: `MONGODB_URI=mongodb://localhost:27017/fraudshield`
3. Replace with your Atlas connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/fraudshield
   ```

---

## 🧪 Test the Application

### 1. **Test Home Page**
   - Visit http://localhost:3000
   - Should show FraudShield landing page

### 2. **Test Registration**
   - Click "Login" button
   - Click "Sign Up" to create account
   - Fill in details and register

### 3. **Test Login**
   - Login with your credentials
   - Should redirect to Dashboard

### 4. **Test Features**
   - **Report**: File a fraud report
   - **Dashboard**: View your reports
   - **Quiz**: Take a cybersecurity quiz
   - **Awareness**: View educational content

---

## 🐛 Troubleshooting

### "npm is not recognized"
- Node.js not installed or PATH not updated
- **Solution**: 
  1. Download & install Node.js from https://nodejs.org/
  2. Close and reopen Command Prompt
  3. Try again

### "Cannot find module" errors
- Dependencies not installed
- **Solution**:
  ```cmd
  cd server && npm install && cd ..
  cd client && npm install && cd ..
  ```

### Port already in use (3000 or 5000)
- Another application using the port
- **Solution** (kill processes):
  ```cmd
  REM Windows - Find and kill process on port 5000
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  ```

### MongoDB connection error
- MongoDB not running locally
- **Solution**:
  1. Use MongoDB Atlas (cloud option - easier)
  2. Or install MongoDB locally and start the service
  3. Update `MONGODB_URI` in `.env`

### Can't connect to localhost:3000 or :5000
- Servers not started
- **Solution**:
  1. Check terminal windows - are both running?
  2. Look for error messages
  3. Ensure no firewall blocking

---

## 📦 Project Structure

```
fraudshield-mern/
├── server/                 # Express backend
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   ├── middleware/        # Auth middleware
│   ├── .env              # Environment config
│   └── server.js         # Start file
│
├── client/                # React frontend
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable components
│   │   ├── context/      # Auth context
│   │   └── styles/       # CSS files
│   └── public/           # HTML template
│
└── RUN.bat              # Quick start script
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Create new account |
| POST | `/api/auth/login` | Login user |
| GET | `/api/users/profile` | Get user profile |
| POST | `/api/reports` | Create fraud report |
| GET | `/api/reports` | Get user reports |
| POST | `/api/quiz/submit` | Submit quiz |
| GET | `/api/health` | Health check |

---

## 💡 Features Walkthrough

### **Home Page**
- Learn about FraudShield
- See key stats
- Quick access buttons

### **Login/Register**
- Create new account or login
- JWT token-based auth
- Password hashing with bcryptjs

### **Dashboard**
- View all your fraud reports
- Track report status
- See statistics

### **File Report**
- Report categories: Fraud, Phishing, Malware, Identity Theft
- Severity levels: Low, Medium, High, Critical
- Add location coordinates
- Submit with one click

### **Quiz**
- Interactive cybersecurity quiz
- Get instant feedback
- See score and explanation

### **Awareness**
- Educational content
- Prevention tips
- Best practices

---

## 📞 Support

Having issues? Check:
1. Node.js is installed: `node --version`
2. MongoDB is running
3. `.env` file exists in `server` folder
4. Ports 3000 and 5000 are available
5. Check terminal for error messages

---

## 🎉 You're All Set!

Your MERN stack application is ready to use. Enjoy building! 🚀

