class Personas {
  nombre: string = "Jonathan";
  edad: number = 25;
  lugar: string = "UIO";
  fecha: Date = new Date();
}
const p: Personas = new Personas();
function showPersona() {
  document.getElementById("txtName")?.setAttribute("value", p.nombre);
  document.getElementById("txtEdad")?.setAttribute("value", p.edad.toString());
  document.getElementById("txtLugar")?.setAttribute("value", p.lugar);
  document.getElementById("txtFecha")?.setAttribute("value", p.fecha.toLocaleDateString('es-ES'));
  console.log("Bienvenido " + p.nombre + " tienes " + p.edad + " años " + "vives en " + p.lugar + " fecha " + p.fecha);
}
function addPersona() {
  let name = (<HTMLInputElement>document.getElementById("txtName")).value;
  let edad = (<HTMLInputElement>document.getElementById("txtEdad")).value;
  let lugar = (<HTMLInputElement>document.getElementById("txtLugar")).value;
  let fecha = (<HTMLInputElement>document.getElementById("txtFecha")).value;
  document.getElementById("mensaje").innerHTML =
    "Bienvenido " + name + " tienes " + edad + " años " + "vives en " + lugar + " fecha " + fecha;
    console.log("Bienvenido " + name + " tienes " + edad + " años " + "vives en " + lugar + " fecha " + fecha);
}
