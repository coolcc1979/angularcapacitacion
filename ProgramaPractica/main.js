var Creador = /** @class */ (function () {
    function Creador() {
        this.nombre = "Steve Jimbo";
        this.edad = 24;
        this.residencia = "Quito";
        this.fechaActual = new Date();
        this.estudio = 5;
    }
    return Creador;
}());
var creador = new Creador();
function rellenar(creador) {
    var res = "El creador se llama ".concat(creador.nombre, ", tiene ").concat(creador.edad, " a\u00F1os, reside actualmente en ").concat(creador.residencia, " y estudio programaci\u00F3n por ").concat(creador.estudio, " a\u00F1os");
    document.getElementById("tnombre").textContent = creador.nombre;
    document.getElementById("tedad").textContent = creador.edad.toString();
    document.getElementById("tresidencia").textContent = creador.residencia;
    document.getElementById("testudio").textContent = creador.estudio.toString();
    document.getElementById("resultado").setAttribute("value", res);
}
function setNombre(creador) {
    var elemento = document.getElementById("nombre");
    creador.nombre = elemento.value;
    rellenar(creador);
}
function setEdad(creador) {
    var elemento = document.getElementById("edad");
    creador.edad = parseInt(elemento.value);
    rellenar(creador);
}
function setResidencia(creador) {
    var elemento = document.getElementById("residencia");
    creador.residencia = elemento.value;
    rellenar(creador);
}
function setEstudio(creador) {
    var elemento = document.getElementById("estudio");
    creador.estudio = parseInt(elemento.value);
    rellenar(creador);
}
function returnFecha(creador) {
    document.getElementById("fecha").textContent = creador.fechaActual.toDateString();
}
function imprimirCreador(creador) {
    console.log("El creador se llama ".concat(creador.nombre, ", tiene ").concat(creador.edad, " a\u00F1os, reside actualmente en ").concat(creador.residencia, " y estuido programacion por ").concat(creador.estudio, " a\u00F1os"));
}
rellenar(creador);
returnFecha(creador);
