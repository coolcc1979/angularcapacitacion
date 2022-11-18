class Creador {
    nombre: string = "Steve Jimbo";
    edad: number = 24;
    residencia: string = "Quito";
    readonly fechaActual: Date = new Date();
    estudio: number = 5;
}

const creador : Creador = new Creador();

function rellenar(creador: Creador): void {
    let res = `El creador se llama ${creador.nombre}, tiene ${creador.edad} años, reside actualmente en ${creador.residencia} y estudio programación por ${creador.estudio} años`;
    document.getElementById("tnombre")!.textContent=creador.nombre;
    document.getElementById("tedad")!.textContent=creador.edad.toString();
    document.getElementById("tresidencia")!.textContent=creador.residencia;
    document.getElementById("testudio")!.textContent=creador.estudio.toString();
    document.getElementById("resultado")!.setAttribute("value",res);
}


function setNombre(creador: Creador): void {
    let elemento = <HTMLInputElement> document.getElementById("nombre");
    creador.nombre = elemento.value;
    rellenar(creador);
}

function setEdad(creador: Creador): void{
    let elemento = <HTMLInputElement> document.getElementById("edad");
    creador.edad = parseInt(elemento.value);
    rellenar(creador);
}

function setResidencia(creador: Creador): void{
    let elemento = <HTMLInputElement> document.getElementById("residencia");
    creador.residencia = elemento.value;
    rellenar(creador);
}

function setEstudio(creador: Creador): void{
    let elemento = <HTMLInputElement> document.getElementById("estudio");
    creador.estudio = parseInt(elemento.value);
    rellenar(creador);
}

function returnFecha(creador: Creador): void{
    document.getElementById("fecha")!.textContent = creador.fechaActual.toDateString();
}

function imprimirCreador(creador: Creador): void {
    console.log(`El creador se llama ${creador.nombre}, tiene ${creador.edad} años, reside actualmente en ${creador.residencia} y estuido programacion por ${creador.estudio} años`);
}

rellenar(creador);
returnFecha(creador);