function xuli() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    if (day <= 0 || day > 31) {
        document.getElementById("noitices").innerHTML = 'Ngày sinh phải từ 1 đến 31';
    }
    else
        if (month <= 0 || month > 12) {
            document.getElementById("noitices").innerHTML = 'Tháng sinh phải từ 1 đến 12';
        }
        else
            if (year <= 1975 || year > 2020) {
                document.getElementById("noitices").innerHTML = 'Năm sinh phải từ 1975 đến 2020';
            }
            else
                document.getElementById("noitices").innerHTML = 'Pass!!!';
}
