import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/Authservice';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router,private Authservice:AuthService) {

   }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!localStorage.getItem('token') || this.Authservice.getAuth().currentUser==null){
        this.router.navigate(['']);
      }
      return window.localStorage.getItem('token') ? true : false;
  }
  
}
