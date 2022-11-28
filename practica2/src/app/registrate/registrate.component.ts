import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css'],
})
export class RegistrateComponent implements OnInit {
  formReg: FormGroup;

  constructor(
    private UserService: UserService,
    private router: Router
    ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    this.UserService.register(this.formReg.value)
      .then((response) => {
        console.log(response);
       let id= response.user.uid;
        Swal.fire("Usuario Ingresado Correctamente");
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
      Swal.fire("El usuario no se ha podido registrar ");
  }

  

  ngOnInit(): void {}
}
