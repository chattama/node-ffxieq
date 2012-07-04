@echo off
rem
rem usage: import.cmd indir dbname
rem

set indir=%~dp0\..\out\db
set dbpath=%~dp0\..\..\data


:main

call :import %1 %2

goto :EOF


:import
echo %2
for /f "delims=;" %%i in ('dir /b %1\*.json') do call :importexec %2 %%i
echo.
goto :EOF


:importexec
set dbname=%1
set collection=%~n2%
set input=%indir%\%1\%2
echo   %collection%
mongoimport --drop --db %dbname% --collection %collection% --file "%input%"
goto :EOF
