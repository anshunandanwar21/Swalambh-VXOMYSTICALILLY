@echo off
REM FraudShield MERN Stack Startup Script
REM This script will install dependencies and start the development servers

echo.
echo ========================================
echo  FraudShield India - MERN Stack Startup
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo.
    echo Please install Node.js first:
    echo 1. Visit https://nodejs.org/ (Download LTS version)
    echo 2. Run the installer
    echo 3. Restart your terminal
    echo 4. Run this script again
    echo.
    pause
    exit /b 1
)

echo Node.js detected: 
node --version
npm --version
echo.

REM Create .env file if it doesn't exist
if not exist "server\.env" (
    echo Creating server\.env file...
    (
        echo PORT=5000
        echo MONGODB_URI=mongodb://localhost:27017/fraudshield
        echo JWT_SECRET=your_jwt_secret_key_change_this_in_production
        echo NODE_ENV=development
    ) > server\.env
    echo .env file created in server directory
)

echo.
echo Installing server dependencies...
cd server
call npm install
cd ..

echo.
echo Installing client dependencies...
cd client
call npm install
cd ..

echo.
echo ========================================
echo  Setup Complete!
echo ========================================
echo.
echo To start the development servers:
echo.
echo Option 1: Run both server and client together
echo   npm run dev
echo.
echo Option 2: Run them in separate terminals
echo   Terminal 1: npm run server
echo   Terminal 2: npm run client
echo.
echo Frontend will be at: http://localhost:3000
echo Backend will be at: http://localhost:5000
echo.
echo Note: Make sure MongoDB is running before starting the server
echo.
pause
