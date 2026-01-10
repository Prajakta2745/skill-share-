#!/bin/bash
# Skill Connect AI - Complete Startup Script

echo "🚀 Starting Skill Connect AI (Full Stack)"
echo "==========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Start Backend
echo "📦 Starting Backend (NestJS on port 3000)..."
echo "-------------------------------------------"
cd backend
npm run start:dev &
BACKEND_PID=$!
echo "✅ Backend started with PID: $BACKEND_PID"
echo ""

# Wait a moment for backend to start
sleep 3

# Start Frontend
echo "🎨 Starting Frontend (Vite on port 5173)..."
echo "-------------------------------------------"
cd ../frontend
npm run dev &
FRONTEND_PID=$!
echo "✅ Frontend started with PID: $FRONTEND_PID"
echo ""

echo "==========================================="
echo "🎉 SKILL CONNECT AI IS RUNNING!"
echo "==========================================="
echo ""
echo "📱 Frontend: http://localhost:5173"
echo "🔗 Backend API: http://localhost:3000"
echo ""
echo "💡 TIP: Press Ctrl+C to stop both servers"
echo ""

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
