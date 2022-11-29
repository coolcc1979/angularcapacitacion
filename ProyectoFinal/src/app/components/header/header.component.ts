import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  titulo: string = "Marvel Heroes";

  urlImg: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png";
  
  isLoged: boolean = false;

  isNew: boolean = false;

  display: string = "";

  constructor(
    private userService: UserService,
    private router: Router
  ) { 
    onAuthStateChanged(getAuth(), (user)=> {
      if(user){
        this.isLoged = true;
        localStorage.setItem("user",user.uid);
        if(user.displayName != null){
          this.isNew = true;
          this.display = user.displayName;
        }else{
          this.isNew = false;
        }
      }else{
        this.isLoged = false;
      } 
    })
  }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['']);
  }
}
