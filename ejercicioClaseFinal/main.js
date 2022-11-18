function fechaActual2() {
    var fecha = new Date();
    var desdeStr = "".concat(fecha.getFullYear(), "-").concat(("0" + (fecha.getMonth() + 1)).slice(-2), "-").concat(fecha.getDate());
    var datos = document.getElementById("fechax");
    datos.innerHTML = desdeStr;
}
function getNombre() {
    var id1 = document.getElementById("nombrei");
    var datos = document.getElementById("name");
    datos.innerHTML = String(id1.value);
    console.log(String(id1));
}
function getEdad() {
    var id1 = document.getElementById("edadi");
    var datos = document.getElementById("age");
    datos.innerHTML = String(id1.value);
    console.log(String(id1));
}
function getTiempo() {
    var id1 = document.getElementById("tiempoi");
    var datos = document.getElementById("time");
    datos.innerHTML = String(id1.value);
    console.log(String(id1));
}
function getLugar() {
    var id1 = document.getElementById("lugari");
    var datos = document.getElementById("place");
    datos.innerHTML = String(id1.value);
    console.log(String(id1));
}
