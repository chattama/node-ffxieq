@echo off

set src=Android-FFXIEQ
set repo=https://github.com/kanata3249/Android-FFXIEQ.git

@IF EXIST "%~dp0\..\src\%src%" (
  git --git-dir="%~dp0\..\src\%src%\.git" --work-tree="%~dp0\..\src\%src%" pull
) ELSE (
  git clone %repo% "%~dp0\..\src\%src%"
)
