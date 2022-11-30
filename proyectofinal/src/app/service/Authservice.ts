import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,getAuth, user} from '@angular/fire/auth';
import {Firestore,collection,setDoc,doc} from "@angular/fire/firestore"


@Injectable({
    providedIn: 'root'
  })

export class AuthService {
        
  constructor(private auth: Auth,public db: Firestore)  {                             
}
    register({ email, password,nombre,apellido,telefono}: any) {
        return createUserWithEmailAndPassword(this.auth, email, password).then(
          (res) => {
              const dbRef=doc(this.db,'usuario',res.user.uid)
              setDoc(dbRef,{
                  nombre:nombre,
                  email:email,
                  apellido:apellido,
                  telefono:telefono,
                  uid:res.user.uid
              }).then((res)=>{
                  console.log(res)
                  alert("se registro correctamente")
              }).catch((err)=>{
                  console.log(err)
              })
          });
     }

      getAuth():Auth{
        return getAuth();
      }
  
    
      login({ email, password }: any) {
        return signInWithEmailAndPassword(this.auth, email, password);
      }

      logout() {
        return signOut(this.auth);
      }        
}