var creador = {
    nombres: "",
    edad: "",
    residencia: "",
    fechaActual: new Date(),
    programando: ""
};
function limpiarNombre() {
    var creadorInput = document.getElementById("creadorInput");
    if (creadorInput) {
        creadorInput.value = "";
        creador.nombres = "";
    }
}
function limpiarResidencia() {
    var residenciaInput = document.getElementById("residenciaInput");
    if (residenciaInput) {
        residenciaInput.value = "";
        creador.residencia = "";
    }
}
function limpiarEdad() {
    var edadInput = document.getElementById("edadInput");
    if (edadInput) {
        edadInput.value = "";
        creador.edad = "";
    }
}
function limpiarProgramando() {
    var aniosInput = document.getElementById("aniosInput");
    if (aniosInput) {
        aniosInput.value = "";
        creador.programando = "";
    }
}
function verDatos() {
    var creadorInput = document.getElementById("creadorInput");
    var residenciaInput = document.getElementById("residenciaInput");
    var edadInput = document.getElementById("edadInput");
    var programandoInput = document.getElementById("aniosInput");
    creador.nombres = creadorInput === null || creadorInput === void 0 ? void 0 : creadorInput.value;
    creador.edad = edadInput === null || edadInput === void 0 ? void 0 : edadInput.value;
    creador.residencia = residenciaInput === null || residenciaInput === void 0 ? void 0 : residenciaInput.value;
    creador.programando = programandoInput === null || programandoInput === void 0 ? void 0 : programandoInput.value;
    console.log("Creador: ", creador);
    document.getElementById("creadorLabel").innerText = creador.nombres;
    document.getElementById("edadLabel").innerText = creador.edad;
    document.getElementById("residenciaLabel").innerText = creador.residencia;
    document.getElementById("aniosLabel").innerText = creador.programando;
    document.getElementById("fechaLabel").innerText = creador.fechaActual.toDateString();
}
