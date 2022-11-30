import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/Authservice';
import { Router } from '@angular/router';
interface User {
  email: string;
  password: string;
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  logo:string="https://images-na.ssl-images-amazon.com/images/I/91rPJ-kVBCL._AC_SL1500_.jpg"
  usuarios: User = {
    email: '',
    password: ''
  }
  constructor(public Auth: AuthService,public router:Router) { }
  ngOnInit(): void {
  }
  submitPassword():void{
   this.Auth.login(this.usuarios).then((res) => {
      let token:string=(<any>res).user.accessToken
      window.localStorage.setItem('token',token)
      this.router.navigate(['home'])
  }).catch((err) => {
    alert("No se ha logeado correctamente ingrese de nuevo su password y contrase;a")
      console.log(err);
   })

  }
}

