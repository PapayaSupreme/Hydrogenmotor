@echo off
setlocal ENABLEEXTENSIONS ENABLEDELAYEDEXPANSION

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

:RECHECK_ENV
REM === Install required packages ===
echo 📦 Installing required npm packages...
call npm install express cors axios dotenv

REM === Check for .env and handle first run ===
IF NOT EXIST ".env" (
    echo 🔐 .env file not found.
    set /p KEY="Paste your OpenRouter API key (sk-...): "
    echo Writing key to .env...
> .env echo OPENROUTER_API_KEY=!KEY!
    echo ✅ .env created.
    timeout /t 1 >nul
    goto RECHECK_ENV
)

REM === Start server.js from root to access .env ===
echo 🚀 Launching Node.js server...
start /min cmd /c "node js/server.js"

REM === Wait a bit for the backend to boot ===
timeout /t 2 >nul

REM === Open frontend ===
echo 🌐 Opening chatbot UI...
start "" "%CD%\html\home.html"

echo 🟢 Everything ready.
exit /b