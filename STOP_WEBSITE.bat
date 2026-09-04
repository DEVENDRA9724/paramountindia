@echo off
title Paramount Website - Stop Server
cd /d "E:\paramount-website"
echo ========================================================
echo   PARAMOUNT INDIA TECHNOLOGIES - STOP SERVER
echo ========================================================
echo.
echo Stopping local website server...
echo.

for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173') do taskkill /f /pid %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5174') do taskkill /f /pid %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5175') do taskkill /f /pid %%a >nul 2>&1

echo Server stopped successfully!
echo.
pause
