import { Component, OnInit } from '@angular/core';
import { PerfilServiceService } from 'src/app/service/perfil-service.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
Perfil:any
  constructor(public PerfilService:PerfilServiceService) {

   }

  ngOnInit(): void {
    this.PerfilService.getPerfil().then((res)=>{
      this.Perfil=res.data()
    }
    )
  }

}
