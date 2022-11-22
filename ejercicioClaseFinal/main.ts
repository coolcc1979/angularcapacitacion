function fechaActual2() {
  let fecha = new Date();
  let desdeStr = `${fecha.getFullYear()}-${("0" + (fecha.getMonth() + 1)).slice(
    -2
  )}-${fecha.getDate()}`;
  var datos=document.getElementById("fechax");
  datos.innerHTML=desdeStr;

}
function getNombre(){
  var id1=<HTMLInputElement>document.getElementById("nombrei");
  var datos=document.getElementById("name");
  datos.innerHTML=String(id1.value);
  console.log(String(id1));
}
function getEdad(){
  var id1=<HTMLInputElement>document.getElementById("edadi");
  var datos=document.getElementById("age");
  datos.innerHTML=String(id1.value);
  console.log(String(id1));
}
function getTiempo(){
  var id1=<HTMLInputElement>document.getElementById("tiempoi");
  var datos=document.getElementById("time");
  datos.innerHTML=String(id1.value);
  console.log(String(id1));
}
function getLugar(){
  var id1=<HTMLInputElement>document.getElementById("lugari");
  var datos=document.getElementById("place");
  datos.innerHTML=String(id1.value);
  console.log(String(id1));
}