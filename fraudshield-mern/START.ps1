# FraudShield MERN Stack Quick Start Guide

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  FraudShield India - MERN Stack Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking for Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = (node --version 2>&1)
    $npmVersion = (npm --version 2>&1)
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
    Write-Host "✓ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js is NOT installed" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js:" -ForegroundColor Yellow
    Write-Host "1. Download LTS version from: https://nodejs.org/" -ForegroundColor White
    Write-Host "2. Run the installer (accept all defaults)" -ForegroundColor White
    Write-Host "3. Restart PowerShell" -ForegroundColor White
    Write-Host "4. Run this script again" -ForegroundColor White
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Creating environment file..." -ForegroundColor Yellow

# Create .env if it doesn't exist
$envPath = "server\.env"
if (-not (Test-Path $envPath)) {
    @"
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fraudshield
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
"@ | Out-File -FilePath $envPath -Encoding UTF8
    Write-Host "✓ Created: $envPath" -ForegroundColor Green
} else {
    Write-Host "✓ $envPath already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host ""

# Install server dependencies
Write-Host "Installing server packages..." -ForegroundColor Cyan
cd server
npm install
cd ..
Write-Host ""

# Install client dependencies
Write-Host "Installing client packages..." -ForegroundColor Cyan
cd client
npm install
cd ..
Write-Host ""

Write-Host "========================================" -ForegroundColor Green
Write-Host "  Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Available commands:" -ForegroundColor Yellow
Write-Host "  npm run dev     - Start both server and client" -ForegroundColor White
Write-Host "  npm run server  - Start only backend server" -ForegroundColor White
Write-Host "  npm run client  - Start only frontend" -ForegroundColor White
Write-Host ""
Write-Host "Access the application at:" -ForegroundColor Yellow
Write-Host "  Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "  Backend:  http://localhost:5000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Important: Make sure MongoDB is running before starting!" -ForegroundColor Yellow
Write-Host ""
