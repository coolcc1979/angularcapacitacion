import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  login(){
    this.userService.login(this.user)
    .then(response => {
      this.router.navigate(['']);
    })
    .catch(error => {
      alert("Error con el Usuario/Contraseña");
    });
  }

}
