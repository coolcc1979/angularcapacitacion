import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iperfil } from 'src/app/interfaces/iperfil';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  imagen: string =
    'https://365psd.com/images/previews/3b6/small-store-icon-psd-53185.jpg';
  nombreUsuario: string = '';
  email: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    const emailAux = localStorage.getItem('user');
    if (emailAux) {
      this.email = emailAux;
    }
    this.getUsuarios()
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    localStorage.removeItem('user');
  }

  getUsuarios() {
    this.userService.getUsuarios().subscribe((res) => {
      const userFind = res.find((user: any) => user.email === this.email) as Iperfil

      this.nombreUsuario = userFind.nombre
      console.log(userFind);
    })
  }
}
