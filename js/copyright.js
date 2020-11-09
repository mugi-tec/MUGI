// JS Information ======================================================
// Site URL:http:mugi.co.jp
// File name:copyright.js
// Summary:西暦自動繰上
// Created:2020-9-21
// Last update:2020-9-21 by Sadaoka
// Copyright:(C) mugi Co.,Ltd.
//======================================================================

myD = new Date();
myYear = myD.getYear();
myYears = (myYear < 2000) ? myYear+1900 : myYear;
document.write("&copy; 2011-",myYears," mugi Co.,Ltd.");
