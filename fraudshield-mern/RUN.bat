@echo off
setlocal enabledelayedexpansion

echo.
echo ==========================================
echo   FraudShield MERN - Complete Setup
echo ==========================================
echo.

REM Check if Node.js is available
echo Checking for Node.js installation...
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Node.js is installed
    node --version
    npm --version
    echo.
) else (
    echo [ERROR] Node.js is NOT installed
    echo.
    echo Please download and install Node.js from:
    echo https://nodejs.org/ (Download LTS version)
    echo.
    echo After installation:
    echo 1. Close this window
    echo 2. Open a NEW Command Prompt
    echo 3. Run this script again
    echo.
    pause
    exit /b 1
)

REM Create .env file
echo Creating environment configuration...
if not exist "server\.env" (
    (
        echo PORT=5000
        echo MONGODB_URI=mongodb://localhost:27017/fraudshield
        echo JWT_SECRET=your_jwt_secret_key_change_in_production
        echo NODE_ENV=development
    ) > server\.env
    echo [OK] Created server\.env
) else (
    echo [OK] server\.env already exists
)

echo.
echo Installing dependencies...
echo.

REM Install server dependencies
echo [1/2] Installing backend packages...
cd server
call npm install --silent
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install server dependencies
    pause
    exit /b 1
)
cd ..
echo [OK] Backend packages installed
echo.

REM Install client dependencies  
echo [2/2] Installing frontend packages...
cd client
call npm install --silent
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install client dependencies
    pause
    exit /b 1
)
cd ..
echo [OK] Frontend packages installed
echo.

echo ==========================================
echo   Setup Complete!
echo ==========================================
echo.
echo Your application is ready to run!
echo.
echo Starting development servers...
echo.
echo This will open:
echo  - Backend: http://localhost:5000
echo  - Frontend: http://localhost:3000
echo.

REM Start the dev environment
call npm run dev

pause
