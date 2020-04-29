var a = 10;
var b = 20;
if (a < b) {
    let c = a;
    a = b;
    b = c;
}
document.write("a =" + a);
document.write(" và");
document.write(" b =" + b);
document.write(c); //let trong ES6 chỉ hiện thị trong khu vực{} của đó