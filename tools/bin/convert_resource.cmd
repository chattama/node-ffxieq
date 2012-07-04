@echo off

mkdir %~dp0\..\out\res\


set input=%~dp0\..\src\Android-FFXIEQ\ffxieq\res\values\strings.xml
set output=%~dp0\..\..\app\lib\res\strings.js

node "%~dp0\..\lib\convert_string.js" "%input%" "%output%"

echo %output%


set input=%~dp0\..\src\Android-FFXIEQ\ffxieq\src\com\github\kanata3249\ffxi\FFXIString.java
set output=%~dp0\..\..\app\lib\res\ffxistring.js

echo module.exports={> "%output%"
grep "public static final int" %input% | sed -e "s/\spublic static final int //g" -e "s/ = /: /g" -e "s/;/,/g" >> "%output%"
echo };>> "%output%"

echo %output%
