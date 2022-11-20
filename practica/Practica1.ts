interface datos {
  nombre: string;
  edad: null | number;
  residencia: null | string;
}
interface datos2 extends datos {
  fechaActual: Date;
}
let datos1: datos2 = datosdefault();
document.getElementById("nombre_text").innerHTML =
  datos1 !== null ? datos1.nombre : "";
document.getElementById("edad_text").innerHTML =
  datos1 !== null ? datos1.edad.toString() : "";
document.getElementById("lugar_text").innerHTML =
  datos1 !== null ? datos1.residencia : "";
document.getElementById("anos_text").innerHTML =
  datos1 !== null ? datos1.fechaActual.toString() : "";
let datosdefaul: datos2 = datosdefault();
function datosdefault(): datos2 {
  return {
    nombre: "Juan",
    edad: 20,
    residencia: "Argentina",
    fechaActual: new Date(),
  };
}
function datos(nombre: string, edad: number, residencia: string): datos2 {
  return {
    nombre,
    edad,
    residencia,
    fechaActual: new Date(),
  };
}
document.getElementById("nombre");
function changeValue(): void {
  let dato: datos2 = datos(
    (<HTMLInputElement>document.getElementById("nombre")).value,
    parseInt((<HTMLInputElement>document.getElementById("edad")).value),
    (<HTMLInputElement>document.getElementById("lugar")).value
  );
  if (
    dato.nombre == "" ||
    dato.edad.toString() == "" ||
    dato.residencia == ""
    ) {
    alert("Datos ingresados correctamente");
  }
  else{
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
