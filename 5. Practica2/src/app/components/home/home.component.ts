import { Component, OnInit } from '@angular/core';
import { Iperfil } from 'src/app/interfaces/iperfil';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  perfil: Iperfil = {
    nombre: '',
    pais: '',
    provincia: '',
    ciudad: '',
    direccion: '',
    telefono: '',
    email: '',
    fechaNacimiento: '',
    hobies: [],
    id: '',
  };

  hobbieAux: string = '';
  paises: string[] = ['Ecuador', 'Colombia', 'Chile', 'Peru', 'Mexico'];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    const email = localStorage.getItem('user');
    if (email) {
      this.perfil.email = email;
      this.getUsuarios(email);
    } else {
      this.router.navigate(['/login']);
    }
  }

  async createPerfil(forma: NgForm) {
    console.log();
    try {
      await this.userService.addUsuario(this.perfil);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  addHobbie(): void {
    if (this.hobbieAux.length > 0) {
      this.perfil.hobies = [...this.perfil.hobies, this.hobbieAux];
      this.hobbieAux = '';
    }
  }

  deleteHobbie(index: number): void {
    this.perfil.hobies.splice(index, 1);
  }

  getUsuarios(email: string) {
    this.userService.getUsuarios().subscribe((users) => {
      const dataUserFind = users.find(
        (userItem: any) => userItem.email === email
      );
      console.log(dataUserFind);
      if (dataUserFind) {
        this.perfil = dataUserFind as Iperfil;
      }
    });
  }
}
