function check() {
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('mail').value;
    var date = document.getElementById('date').value;
    if (isNaN(phone) || phone.length != 10) {
        document.getElementById('phone-error').innerHTML = "Nhập sai định dạng số điện thoại";
    }
    else
        document.getElementById('phone-error').innerHTML = "";

    var mailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!mailregex.test(email)) {
        document.getElementById('mail-error').innerHTML = "Nhập sai định dạng email";
    }
    else
        document.getElementById('mail-error').innerHTML = "";

    var dateregex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    if (!dateregex.test(date)) {
        document.getElementById('date-error').innerHTML = "Nhập sai định dạng thời gian";
    }
    else
        document.getElementById('date-error').innerHTML = "";
}
