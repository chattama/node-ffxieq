@echo off

rem set NODE_ENV=production
set NODE_ENV=development

set SERVER="%~dp0/server.js"

goto %NODE_ENV%

:production
node %SERVER%
goto exit

:development
node-dev %SERVER%
goto exit

:exit
