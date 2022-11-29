import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private database: AngularFirestore
  ) { }

  getById(id: string) {
    return this.database
      .collection("usuarios")
      .doc(id)
      .valueChanges()
  }

  create(data: any, uid:string) {
    return this.database
      .collection("usuarios")
      .doc(uid)
      .set(Object.assign({}, data))
  }

  saveHeroe(data:any){
    return this.database
      .collection("heroes")
      .doc(data.id)
      .set(Object.assign({}, data))
  }

  getHeroes(){
    return this.database
      .collection("heroes")
      .snapshotChanges()
  }

}
