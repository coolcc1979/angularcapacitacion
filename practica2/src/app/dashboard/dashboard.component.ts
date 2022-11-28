import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {countries} from '../countries';
import { usuario } from '../models/modeloUsuario';
import { FirestoreService } from '../services/firestore.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  myForm: FormGroup;
  countries = countries;
  user: usuario = { nombre: "",
    provincia: "",
    pais: "",
    ciudad: "",
    direccion: "",
    telefono: "",
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
    console.log(this.user);
    const res = await this.UserService.registrarUser(this.user)
    .catch((error) => console.log(error));
    if(res){
      Swal.fire("Usuario registrado correctamente  ");
      const path= "usuarios";
      const id = res.user.uid;
      this.user.uid= id;
      this.user.contrasenia ="";
      await this.firestore.createDoc(this.user,path, id) .catch((error) =>  console.log(error));
    }
    
  }
}
