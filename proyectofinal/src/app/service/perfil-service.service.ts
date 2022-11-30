import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  setDoc,
  doc,
  getDoc,
  DocumentReference,
} from '@angular/fire/firestore';
import { getAuth, Auth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class PerfilServiceService {
  data: Object ;
  constructor(auth: Auth, public db: Firestore) {
    this.data={}
  }
  getUseruid(): Auth {
    const auth = getAuth();
    return auth;
  }
  async getPerfil(){
    const docge: DocumentReference<unknown> = doc(
      this.db,
      'usuario',
      this.getUseruid().currentUser.uid
    );
    const docd=await getDoc(docge)
    return docd
  }
  getList(): Object {
    return this.data;
  }
}
