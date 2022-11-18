class Persona {
    nombreCreador: string = "Ronaldo";
    edad: number = 24;
    lugarResidencia: string = "Latacunga";
    fecha: Date = new Date();
    aniosEstudio: number = 15;
  }

  var persona: Persona = new Persona();

  function defaultPersona() {
    document.getElementById("txtNombreCreador")?.setAttribute("value", persona.nombreCreador);
    document.getElementById("txtEdad")?.setAttribute("value", persona.edad.toString());
    document.getElementById("txtLugarResidencia")?.setAttribute("value", persona.lugarResidencia);
    document.getElementById("txtFecha")?.setAttribute("value", persona.fecha.toLocaleDateString('es-ES'));
    document.getElementById("txtAniosEstudio")?.setAttribute("value", persona.aniosEstudio.toString());
   
  }

  function agregarPersona() {
    let nombreC = (<HTMLInputElement>document.getElementById("txtNombreCreador")).value;
    let edad = (<HTMLInputElement>document.getElementById("txtEdad")).value;
    let lugarResidencia = (<HTMLInputElement>document.getElementById("txtLugarResidencia")).value;
    let fecha = (<HTMLInputElement>document.getElementById("txtFecha")).value;
    let aniosE = (<HTMLInputElement>document.getElementById("txtAniosEstudio")).value;
    document.getElementById("mensaje").innerHTML =
      "Hola " + nombreC + ", bienvenido al curso de Angular, tienes " + edad + " años " + ", resides actualmente en  " + lugarResidencia + ", la fecha de resgistro es  " + fecha+" y tienes " + aniosE + " años de estudio";
      
  }