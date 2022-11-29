import { Component, OnInit } from '@angular/core';
import { Usuario } from '../classes/Usuario';
import { PaisesService } from '../services/paises.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {

  usuario: Usuario = new Usuario();

  paises: any[] = [];

  hobie: string = "";

  constructor(
    private paisesService: PaisesService,
    private usuarioService: UserService,
    private router: Router,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this.databaseService.getById(localStorage.getItem("user")!).subscribe(response => {
      if(response != undefined){
        this.usuario = response as Usuario;
      }
    });
    this.paisesService.getCountries().subscribe(response => {
      this.paises = response;
    });
    this.usuario.email = this.usuarioService.getUserEmail();
  }

  addHobie(){
    this.usuario.hobies?.push(this.hobie);
    this.hobie = "";
  }

  saveProfile(){
    this.databaseService.create(this.usuario,localStorage.getItem("user")!);
    this.usuarioService.updateDisplayName(this.usuario.nombre!);
    this.router.navigate(['']);
  }
}
