@echo off
echo ====================================
echo Pushing project to GitHub...
echo ====================================

:: Initialize git if it's not already initialized
git init

:: Hide line ending warnings which are common and harmless on Windows
git config core.autocrlf true
git config core.safecrlf false

:: Stage all changes (warnings hidden)
echo Staging files...
git add . 2>nul

:: Commit the changes
echo Committing files...
git commit -m "Auto-commit from script"

:: Make sure the main branch exists and is selected
git branch -M main

:: Add the remote repository (ignores error if it already exists)
git remote add origin https://github.com/aanirudhmorishetty-hash/WAD_24071A05H4.git 2>nul

:: Push the code to the repository
echo Pushing to GitHub...
git push -u origin main

echo.
echo ====================================
echo Process complete! 
echo.
echo NOTE: If you previously saw "warning: LF will be replaced by CRLF", 
echo that is completely normal on Windows and does not affect your code!
echo ====================================
pause
