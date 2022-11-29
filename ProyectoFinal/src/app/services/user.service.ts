import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, updateProfile } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private auth: Auth
  ) { }

  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }

  user(){
    return getAuth().currentUser; 
  }

  getUserEmail(){
    let email = getAuth().currentUser?.email;
    return email != null ? email : "";
  }

  updateDisplayName(name: string){
    updateProfile( this.auth.currentUser! , {    
      displayName: name 
    }).then(() => {}).catch((error) => {
      console.log(error);
    });
  }

}
