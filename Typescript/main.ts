let saludo: string = "Hola mundo";
let edad: string = "22";
let nombre: string = "Jessy";

const persona = {
  nombre: "Jessica Ballesteros",
  edad: 22,
  lugarResidencia: "Riobamba",
  aniosEsdiados: 4,
};

function calcularFecha(): String {
  let n = new Date();
  let y = n.getFullYear();
  let m = n.getMonth() + 1;
  let d = n.getDate();
  let fecha = m + "/" + d + "/" + y;
  return fecha;
}

const nom = document.getElementById("nombre") as HTMLInputElement | null;

if (nom != null) {
  nom.value = persona.nombre;
}

const eda = document.getElementById("edad") as HTMLInputElement | null;

if (eda != null) {
  eda.value = persona.edad.toString();
}

const lug = document.getElementById(
  "lugarResidencia"
) as HTMLInputElement | null;

if (lug != null) {
  lug.value = persona.lugarResidencia;
}

const fech = document.getElementById("fechaActual") as HTMLInputElement | null;

if (fech != null) {
  fech.value = calcularFecha().toString();
}

const est = document.getElementById("estudios") as HTMLInputElement | null;

if (est != null) {
  est.value = persona.aniosEsdiados.toString();
}

const editar = document.getElementById("ed_1") as HTMLElement;
const editar2 = document.getElementById("ed_2") as HTMLElement;
const editar3 = document.getElementById("ed_3") as HTMLElement;
const editar4 = document.getElementById("ed_4") as HTMLElement;
editar.addEventListener("click", (e) => {
  e.preventDefault();
  if (nom != null) {
    persona.nombre = nom.value;
    console.log(persona);
  }
});

editar2.addEventListener("click", (e) => {
  e.preventDefault();
  if (eda != null) {
    persona.edad = parseInt(eda.value);
    console.log(persona);
  }
});

editar3.addEventListener("click", (e) => {
  e.preventDefault();
  if (lug != null) {
    persona.lugarResidencia = lug.value;
    console.log(persona);
  }
});

editar4.addEventListener("click", (e) => {
  e.preventDefault();
  if (est != null) {
    persona.aniosEsdiados = parseInt(est.value);
    console.log(persona);
  }
});
