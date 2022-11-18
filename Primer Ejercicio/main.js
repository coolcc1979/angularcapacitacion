window.addEventListener("load", cargaPagina);
function cargaPagina() {
    var btn = document.getElementById("boton1").addEventListener("click", cambiaValores);
}

function cambiaValores() {
    var nombreDelCreador = document.getElementById("nombre");
    var edad = document.getElementById("edad");
    var lugarDeResidencia = document.getElementById("residencia");
    var fechaActual = document.getElementById("fecha");
    var aniosEstudiando = document.getElementById("años");

    nombreDelCreador.value = "Julio Alimaña";
    edad.value = "27 años";
    lugarDeResidencia.value = "Mitad del Mundo";
    fechaActual.value = "Viernes 18/11/2022";
    aniosEstudiando.value = "5 años";
}

