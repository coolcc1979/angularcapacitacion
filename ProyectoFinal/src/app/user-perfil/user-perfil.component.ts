import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { Usuario } from '../classes/Usuario';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.css']
})
export class UserPerfilComponent implements OnInit {

  isNew: boolean = false;

  usuario: Usuario = new Usuario();

  constructor(
    private databaseService: DatabaseService
  ) { 
    let user = getAuth().currentUser;
    if (user) {
      if (user.displayName != null) {
        this.isNew = true;
        this.databaseService.getById(user.uid).subscribe(response => {
          this.usuario = response as Usuario;
        });
      } else {
        this.isNew = false;
      }
    }
  }

  ngOnInit(): void {
    
  }

}
