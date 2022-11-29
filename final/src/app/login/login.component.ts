import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLog: FormGroup;
  imgLogoUrl: String;
  constructor(private UserService: UserService, private router: Router) {
    this.formLog = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
    this.imgLogoUrl = ""
  }

  onSubmit() {
    this.UserService.login(this.formLog.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire('No se ha podido iniciar sesión ');
      });
  }

  onClick() {
    this.UserService.loginWithGoogle()
      .then((response) => {
        console.log(response);
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire('No se ha podudo inciar sesión ');
      });
  }

  ngOnInit(): void {}
}
