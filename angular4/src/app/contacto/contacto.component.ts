import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  textplaceholder:string ="Ingrese el comentario";
  deshabilitado:boolean = true;
  comentario:string='';
  imagenAvatar="../../assets/imagen/logo.png";
  comentarios:Object[]
  constructor() {
   
    setTimeout(() => {
      this.deshabilitado = false;
    }, 5000);
    this.comentarios=[];
   }
  ngOnInit(): void {
  }
  agregarComentario(e:Event){
    e.preventDefault();
    this.comentarios.push(this.comentario);
    this.comentario='';
  }

}
