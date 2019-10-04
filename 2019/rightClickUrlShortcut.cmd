:: cerner_2^5_2019
:: Run on Windows in an elevated terminal and it will add a "bookmark" to the contest dashboard
:: Right click any white space in Windows File Explorer and select `Open 2^5 2019 dashboard`
REG ADD HKEY_CLASSES_ROOT\Directory\Background\shell\2to5 /d "Open 2^5 2019 dashboard"
REG ADD HKEY_CLASSES_ROOT\Directory\Background\shell\2to5\command /d "chrome.exe http://2tothe5th.dashboard.hax/"
