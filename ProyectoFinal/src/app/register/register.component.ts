import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    email: "",
    password: ""
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registrar(){
    this.userService.register(this.user)
    .then(response => {
      this.router.navigate(['/login']);
    })
    .catch(error => {
      alert("Problema con el registro. Correo Duplicado");
    });
  }
}
