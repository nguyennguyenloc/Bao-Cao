function changeBg() {
    var select = document.getElementById('select').value;
    switch (select) {
        case 'red':
            document.body.style.backgroundColor = "red";
            break;
        case 'blue':
            document.body.style.backgroundColor = "blue";
            break;
        case 'brown':
            document.body.style.backgroundColor = "brown";
            break;
        case 'lavender':
            document.body.style.backgroundColor = "lavender";
            break;
    }
}


