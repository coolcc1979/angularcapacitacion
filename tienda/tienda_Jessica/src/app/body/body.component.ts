import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  form!: FormGroup;
  nombre: String;
  producto: String;
  precio: String;
  deshabilitado:  boolean = true;
  textplaceholder: String;
  comentario: String;
  nombres: String[];
  constructor() { 
    // construir el formulario 
    this.buildForm();
    this.nombre = "";
    this.producto = "";
    this.precio = "";
    this.textplaceholder ="";
    this.comentario ="";
    this.nombres = ["Jessica Ballesteros","Jose Manolo", "Jose Alfonso"];
  }

  ngOnInit(): void {
    
  }
  

  public user(){
    this.deshabilitado =true;
    this.producto = "Sabana";
    this.precio = "2$";
    setInterval(()=>this.deshabilitado = false, 5000);
    this.nombre = this.nombres[0];
  }
 public  user1(){
  this.deshabilitado =true;
    this.producto = "Sofa";
    this.precio = "200$";
    setInterval(()=>this.deshabilitado = false, 5000);
    this.nombre = this.nombres[1];
  }
  public user2(){
    this.deshabilitado =true;
    this.producto = "Manta";
    this.precio = "3$";
    setInterval(()=>this.deshabilitado = false, 5000);
    this.nombre = this.nombres[2];
  }


  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }
  
  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      text: new FormControl('', [Validators.maxLength(200)]),
      category: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
    });

  this.form.valueChanges
  .subscribe(value => {
    console.log(value);
  });

  
  
  }
  

}