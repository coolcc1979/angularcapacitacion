import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IUsuario } from 'src/app/IUsuario';
import { FirestoreService } from '../services/firestore.service';
import {paises} from '../paises';
import Swal from'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  myForm: FormGroup;
  paises = paises;
  usuario: IUsuario = { nombre: "",
    provincia: "",
    pais: "",
    ciudad: "",
    direccion: "",
    celular: "",
    email: "",
    fecha: "",
    hobbies: "",
    contrasenia: "",
    uid: "",
  }
  constructor(private UserService: UserService, private router: Router,
    private firestore: FirestoreService,
    public fb: FormBuilder) {
       this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      pais: [''],
      direccion: [''],
      provincia: [''],
      ciudad: [''],
      telefono: [''],
      email: [''],
      contrasenia: [''],
      hobbies: [''],
    });
    }

  ngOnInit(): void { 
  }

  onClick() {
    this.UserService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log());
  }

  async submit(){
    console.log(this.usuario);
    const res = await this.UserService.registerUser(this.usuario)
    .catch((error) => console.log(error));
    if(res){
      Swal.fire("Usuario registrado correctamente  ");
      const path= "usuarios";
      const id = res.user.uid;
      this.usuario.uid= id;
      this.usuario.contrasenia ="";
      await this.firestore.createDoc(this.usuario,path, id) .catch((error) =>  console.log(error));
    }
    
  }
}