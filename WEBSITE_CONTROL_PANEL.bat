@echo off
title Paramount Website Control Panel
cd /d "E:\paramount-website"

:MENU
cls
echo ========================================================
echo   PARAMOUNT INDIA TECHNOLOGIES - WEBSITE CONTROL PANEL
echo ========================================================
echo.
echo   [1] START Live Website Server (Opens in Browser)
echo   [2] STOP Website Server
echo   [3] OPEN Offline Dist Version (dist/index.html)
echo   [4] Exit
echo.
echo ========================================================
set /p choice="Select an option [1-4] and press Enter: "

if "%choice%"=="1" goto START_SERVER
if "%choice%"=="2" goto STOP_SERVER
if "%choice%"=="3" goto OPEN_OFFLINE
if "%choice%"=="4" goto EXIT

echo Invalid option, please try again.
ping 127.0.0.1 -n 2 >nul
goto MENU

:START_SERVER
cls
echo Starting Paramount Website...
echo Opening http://localhost:5173 in your default browser...
echo.
npm run start
pause
goto MENU

:STOP_SERVER
cls
echo Stopping website server on ports 5173 / 5174...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173') do taskkill /f /pid %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5174') do taskkill /f /pid %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5175') do taskkill /f /pid %%a >nul 2>&1
echo Server stopped cleanly.
ping 127.0.0.1 -n 2 >nul
goto MENU

:OPEN_OFFLINE
cls
echo Opening static dist/index.html in browser...
start "" "E:\paramount-website\dist\index.html"
goto MENU

:EXIT
exit
