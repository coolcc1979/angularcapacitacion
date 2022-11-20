var datos1 = datosdefault();
document.getElementById("nombre_text").innerHTML =
    datos1 !== null ? datos1.nombre : "";
document.getElementById("edad_text").innerHTML =
    datos1 !== null ? datos1.edad.toString() : "";
document.getElementById("lugar_text").innerHTML =
    datos1 !== null ? datos1.residencia : "";
document.getElementById("anos_text").innerHTML =
    datos1 !== null ? datos1.fechaActual.toString() : "";
var datosdefaul = datosdefault();
function datosdefault() {
    return {
        nombre: "Juan",
        edad: 20,
        residencia: "Argentina",
        fechaActual: new Date()
    };
}
function datos(nombre, edad, residencia) {
    return {
        nombre: nombre,
        edad: edad,
        residencia: residencia,
        fechaActual: new Date()
    };
}
document.getElementById("nombre");
function changeValue() {
    var dato = datos(document.getElementById("nombre").value, parseInt(document.getElementById("edad").value), document.getElementById("lugar").value);
    if (dato.nombre == "" ||
        dato.edad.toString() == "" ||
        dato.residencia == "") {
        alert("Datos ingresados correctamente");
    }
    else {
        document.getElementById("nombre_text").innerHTML =
            dato !== null ? dato.nombre : "";
        document.getElementById("edad_text").innerHTML =
            dato !== null ? dato.edad.toString() : "";
        document.getElementById("lugar_text").innerHTML =
            dato !== null ? dato.residencia : "";
        document.getElementById("anos_text").innerHTML =
            dato !== null ? dato.fechaActual.toString() : "";
    }
}
