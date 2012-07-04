@echo off

set srcdir=%~dp0\..\src\Android-FFXIEQ\ffxieq
set tmpdir=%~dp0\..\tmp
set outdir=%~dp0\..\out\db\ffxieq

set lib=%~dp0\..\lib

mkdir "%outdir%"

del /F /Q "%outdir%\*.*"

node "%lib%\unzip.js" "%srcdir%\assets\ffxieq.zip" "%tmpdir%"

node "%lib%\convert_database.js" "%tmpdir%\ffxieq.db" "%outdir%"

call %~dp0\import.cmd "%outdir%" ffxieq
