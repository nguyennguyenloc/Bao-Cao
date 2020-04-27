function keydown() {
    var area = document.getElementById('area').value;
    var keydown = document.getElementById('keydown');
    if (area.length > 10) {
        alert("Bạn nhập quá số lượng kí tự!!!");
    }
    keydown.value = area.length;
}