var day = prompt("Nhập ngày sinh: ");
var month = prompt("Nhập tháng sinh: ");
var year = prompt("Nhập năm sinh: ");
var date1 = new Date(Number(month) + '/' + Number(day) + '/' + Number(year));
var date2 = new Date();
// To calculate the time difference of two dates 
var age = Math.floor(((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24 * 365)));
document.write("<span style='font-weight:bold; color:red; text-decoration: underline;'>" + age + "</span> tuổi"); 