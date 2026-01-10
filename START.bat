@echo off
REM Skill Connect AI - Windows Startup Script

echo.
echo ====================================
echo 🚀 SKILL CONNECT AI - STARTUP
echo ====================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js version:
node -v
echo.

REM Start Backend
echo 📦 Starting Backend (NestJS on port 3000)...
echo -------------------------------------------
cd backend
start cmd /k "npm run start:dev"
echo ✅ Backend started in a new terminal window
echo.

REM Wait a moment for backend to start
timeout /t 3 /nobreak

REM Start Frontend
echo 🎨 Starting Frontend (Vite on port 5173)...
echo -------------------------------------------
cd ..\skill-connect-ai-main
start cmd /k "npm run dev"
echo ✅ Frontend started in a new terminal window
echo.

echo ====================================
echo 🎉 SERVERS STARTING!
echo ====================================
echo.
echo 📱 Frontend: http://localhost:5173
echo 🔗 Backend API: http://localhost:3000
echo.
echo ⏳ Waiting for servers to start...
echo.
echo 💡 TIP: Close the new terminal windows when done
echo.
pause
