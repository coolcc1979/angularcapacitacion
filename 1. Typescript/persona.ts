
interface Creador {
    nombres: string | undefined,
    edad: string | undefined,
    residencia: string | undefined,
    fechaActual: Date,
    programando: string | undefined,
}

var creador: Creador = {
    nombres: "",
    edad: "",
    residencia: "",
    fechaActual: new Date(),
    programando: ""
}

function limpiarNombre(){

    const creadorInput = document.getElementById("creadorInput") as HTMLInputElement | null;
    if(creadorInput){
        creadorInput.value = "";
        creador.nombres = "";
    }
    
}

function limpiarResidencia(){

    const residenciaInput = document.getElementById("residenciaInput") as HTMLInputElement | null;
    if(residenciaInput){
        residenciaInput.value = "";
        creador.residencia = "";
    }
    
}

function limpiarEdad(){

    const edadInput = document.getElementById("edadInput") as HTMLInputElement | null;
    if(edadInput){
        edadInput.value = "";
        creador.edad = "";
    }
    
}

function limpiarProgramando(){

    const aniosInput = document.getElementById("aniosInput") as HTMLInputElement | null;
    if(aniosInput){
        aniosInput.value = "";
        creador.programando = "";
    }
    
}



function verDatos(){

    let creadorInput = document.getElementById("creadorInput") as HTMLInputElement | null;
    let residenciaInput = document.getElementById("residenciaInput") as HTMLInputElement | null;
    let edadInput = document.getElementById("edadInput") as HTMLInputElement | null;
    let programandoInput = document.getElementById("aniosInput") as HTMLInputElement | null;


    creador.nombres = creadorInput?.value
    creador.edad = edadInput?.value
    creador.residencia = residenciaInput?.value
    creador.programando = programandoInput?.value

    console.log("Creador: ", creador)

    document.getElementById("creadorLabel").innerText = creador.nombres
    document.getElementById("edadLabel").innerText = creador.edad
    document.getElementById("residenciaLabel").innerText = creador.residencia
    document.getElementById("aniosLabel").innerText = creador.programando
    document.getElementById("fechaLabel").innerText = creador.fechaActual.toDateString()

    
}



