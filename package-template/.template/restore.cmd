@echo off 
rem move into the assets folder, and restore npm

cd .\MyPackage.1.Client\Assets
echo -- Restoring NPM Packages
call npm install -force

echo -- Running build scripts first time
call npm run build