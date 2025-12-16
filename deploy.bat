@echo off
echo ====================================
echo Building project for Cloudflare...
echo ====================================
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo Build failed!
    pause
    exit /b 1
)

echo.
echo ====================================
echo Build successful! Deploying...
echo ====================================
wrangler pages deploy out --project-name=southbuild-invest

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ====================================
    echo Deployment failed!
    echo Make sure you have wrangler installed: npm install -g wrangler
    echo And that you're logged in: wrangler login
    echo ====================================
    pause
    exit /b 1
)

echo.
echo ====================================
echo Deployment successful!
echo ====================================
pause

