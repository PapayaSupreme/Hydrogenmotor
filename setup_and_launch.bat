@echo off
setlocal ENABLEEXTENSIONS

REM === Change to project root directory ===
cd /d "%~dp0"

REM === Check for Node.js ===
where node >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js not found. Opening download page...
    powershell -Command "Start-Process 'https://nodejs.org/dist/v18.19.1/node-v18.19.1-x64.msi' -Wait"
    echo ⚠️ Please rerun this script after installing Node.js.
    pause
    exit /b
)

REM === Install dependencies in root (shared node_modules) ===
echo 📦 Installing required npm packages...
call npm install express cors axios dotenv

REM === Check for .env at project root ===
IF NOT EXIST ".env" (
    echo 🔐 .env file not found. Creating one now...
    set /p KEY="Paste your OpenRouter API key (sk-...): "
    echo OPENROUTER_API_KEY=%KEY% > .env
    echo ✅ .env created.
) ELSE (
    echo ✅ .env file found in root.
)

REM === Start server from root so .env is valid ===
echo 🚀 Launching Node.js server...
start /min cmd /c "node js/server.js"

REM === Wait a moment for server to start ===
timeout /t 2 >nul

REM === Open HTML frontend ===
echo 🌐 Opening chatbot UI...
start "" "home.html"

echo 🟢 Everything ready.
exit /b
