@echo off

rem adb pull /sdcard/com.github.kanata3249.ffxieq/ffxisettings ../tmp

set tmpdir=%~dp0\..\tmp
set outdir=%~dp0\..\out\db\ffxisettings

set lib=%~dp0\..\lib

mkdir "%outdir%"

del /F /Q "%outdir%\*.*"

node "%lib%\convert_database.js" "%tmpdir%\ffxisettings" "%outdir%"

call %~dp0\import.cmd "%outdir%" ffxisettings
