var Personas = /** @class */ (function () {
    function Personas() {
        this.nombre = "Jonathan";
        this.edad = 25;
        this.lugar = "UIO";
        this.fecha = new Date();
    }
    return Personas;
}());
var p = new Personas();
function showPersona() {
    var _a, _b, _c, _d;
    (_a = document.getElementById("txtName")) === null || _a === void 0 ? void 0 : _a.setAttribute("value", p.nombre);
    (_b = document.getElementById("txtEdad")) === null || _b === void 0 ? void 0 : _b.setAttribute("value", p.edad.toString());
    (_c = document.getElementById("txtLugar")) === null || _c === void 0 ? void 0 : _c.setAttribute("value", p.lugar);
    (_d = document.getElementById("txtFecha")) === null || _d === void 0 ? void 0 : _d.setAttribute("value", p.fecha.toLocaleDateString('es-ES'));
    console.log("Bienvenido " + p.nombre + " tienes " + p.edad + " años " + "vives en " + p.lugar + " fecha " + p.fecha);
}
function addPersona() {
    var name = document.getElementById("txtName").value;
    var edad = document.getElementById("txtEdad").value;
    var lugar = document.getElementById("txtLugar").value;
    var fecha = document.getElementById("txtFecha").value;
    document.getElementById("mensaje").innerHTML =
        "Bienvenido " + name + " tienes " + edad + " años " + "vives en " + lugar + " fecha " + fecha;
    console.log("Bienvenido " + name + " tienes " + edad + " años " + "vives en " + lugar + " fecha " + fecha);
}
