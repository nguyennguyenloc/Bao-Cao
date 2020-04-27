function tong() {
    var so1 = document.getElementById('so1').value;
    var so2 = document.getElementById('so2').value;
    var ketqua = document.getElementById('ketqua');
    ketqua.value = Number(so1) + Number(so2);
}

function hieu() {
    var so1 = document.getElementById('so1').value;
    var so2 = document.getElementById('so2').value;
    var ketqua = document.getElementById('ketqua');
    ketqua.value = Number(so1) - Number(so2);
}

function tich() {
    var so1 = document.getElementById('so1').value;
    var so2 = document.getElementById('so2').value;
    var ketqua = document.getElementById('ketqua');
    ketqua.value = Number(so1) * Number(so2);
}

function thuong() {
    var so1 = document.getElementById('so1').value;
    var so2 = document.getElementById('so2').value;
    var ketqua = document.getElementById('ketqua');
    ketqua.value = Number(so1) / Number(so2);
}

function luythua() {
    var so1 = document.getElementById('so1').value;
    var so2 = document.getElementById('so2').value;
    var ketqua = document.getElementById('ketqua');
    ketqua.value = Math.pow(Number(so1), Number(so2));
}