var Persona = /** @class */ (function () {
    function Persona() {
        this.nombreCreador = "Ronaldo";
        this.edad = 24;
        this.lugarResidencia = "Latacunga";
        this.fecha = new Date();
        this.aniosEstudio = 15;
    }
    return Persona;
}());
var persona = new Persona();
function defaultPersona() {
    var _a, _b, _c, _d, _e;
    (_a = document.getElementById("txtNombreCreador")) === null || _a === void 0 ? void 0 : _a.setAttribute("value", persona.nombreCreador);
    (_b = document.getElementById("txtEdad")) === null || _b === void 0 ? void 0 : _b.setAttribute("value", persona.edad.toString());
    (_c = document.getElementById("txtLugarResidencia")) === null || _c === void 0 ? void 0 : _c.setAttribute("value", persona.lugarResidencia);
    (_d = document.getElementById("txtFecha")) === null || _d === void 0 ? void 0 : _d.setAttribute("value", persona.fecha.toLocaleDateString('es-ES'));
    (_e = document.getElementById("txtAniosEstudio")) === null || _e === void 0 ? void 0 : _e.setAttribute("value", persona.aniosEstudio.toString());
}
function agregarPersona() {
    var nombreC = document.getElementById("txtNombreCreador").value;
    var edad = document.getElementById("txtEdad").value;
    var lugarResidencia = document.getElementById("txtLugarResidencia").value;
    var fecha = document.getElementById("txtFecha").value;
    var aniosE = document.getElementById("txtAniosEstudio").value;
    document.getElementById("mensaje").innerHTML =
        "Hola " + nombreC + ", bienvenido al curso de Angular, tienes " + edad + " años " + ", resides actualmente en  " + lugarResidencia + ", la fecha de resgistro es  " + fecha + " y tienes " + aniosE + " años de estudio";
}
