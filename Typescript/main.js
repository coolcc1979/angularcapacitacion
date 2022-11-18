var saludo = "Hola mundo";
var edad = "22";
var nombre = "Jessy";
var persona = {
    nombre: "Jessica Ballesteros",
    edad: 22,
    lugarResidencia: "Riobamba",
    aniosEsdiados: 4
};
function calcularFecha() {
    var n = new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    var fecha = m + "/" + d + "/" + y;
    return fecha;
}
var nom = document.getElementById("nombre");
if (nom != null) {
    nom.value = persona.nombre;
}
var eda = document.getElementById("edad");
if (eda != null) {
    eda.value = persona.edad.toString();
}
var lug = document.getElementById("lugarResidencia");
if (lug != null) {
    lug.value = persona.lugarResidencia;
}
var fech = document.getElementById("fechaActual");
if (fech != null) {
    fech.value = calcularFecha().toString();
}
var est = document.getElementById("estudios");
if (est != null) {
    est.value = persona.aniosEsdiados.toString();
}
var editar = document.getElementById("ed_1");
var editar2 = document.getElementById("ed_2");
var editar3 = document.getElementById("ed_3");
var editar4 = document.getElementById("ed_4");
editar.addEventListener("click", function (e) {
    e.preventDefault();
    if (nom != null) {
        persona.nombre = nom.value;
        console.log(persona);
    }
});
editar2.addEventListener("click", function (e) {
    e.preventDefault();
    if (eda != null) {
        persona.edad = parseInt(eda.value);
        console.log(persona);
    }
});
editar3.addEventListener("click", function (e) {
    e.preventDefault();
    if (lug != null) {
        persona.lugarResidencia = lug.value;
        console.log(persona);
    }
});
editar4.addEventListener("click", function (e) {
    e.preventDefault();
    if (est != null) {
        persona.aniosEsdiados = parseInt(est.value);
        console.log(persona);
    }
});
