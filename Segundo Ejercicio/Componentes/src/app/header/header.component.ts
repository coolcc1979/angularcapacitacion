import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public imageUrl: string = "https://res.cloudinary.com/teepublic/image/private/s--qjn5BLoD--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_262c3a,e_outline:48/co_262c3a,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1460265817/production/designs/473686_1.jpg";
  public creador: string = "Gibrán";
  public edad: string = "22 años";
  public ubicacion: string = "El Recreo";
  public fecha: string = "21/11/2022";
  public aniosEstudiando: string = "3 años";
  public comentarios: string = "";




  constructor() { }

  ngOnInit(): void {
  }

  

}


