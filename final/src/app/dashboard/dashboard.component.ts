import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  logo: string;
  opcionMenu: number;
  usuario: string;
  constructor(private UserService: UserService, private router: Router) {
    this.logo = '../../assets/logo.png';
    this.opcionMenu = 1;
    this.usuario = "";
  }

  ngOnInit(): void {}

  seleccionarMenu(id: number): void {
    this.opcionMenu = id;
  }

  logout(){
      this.UserService.logout()
        .then(() => {
          this.router.navigate(['/login']);
        })
        .catch((error) => console.log());
  }

}
