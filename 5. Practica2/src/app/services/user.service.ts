import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  addDoc,
  getDoc,
  doc,
  collectionData,
  updateDoc,
} from '@angular/fire/firestore';
import { Iperfil } from '../interfaces/iperfil';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: Firestore) {}

  addUsuario(usuario: Iperfil) {
    if (usuario.id) {
      const userRef = doc(this.firestore, `usuarios/${usuario.id}`);
      return updateDoc(userRef, {
        nombre: usuario.nombre,
        pais: usuario.pais,
        provincia: usuario.provincia,
        ciudad: usuario.ciudad,
        direccion: usuario.direccion,
        telefono: usuario.telefono,
        fechaNacimiento: usuario.fechaNacimiento,
        hobies: usuario.hobies,
      });
    } else {
      const userRef = collection(this.firestore, 'usuarios');
      return addDoc(userRef, usuario);
    }
  }

  getUsuario(id: string) {
    const userRef = doc(this.firestore, `usuarios/${id}`);
    console.log(userRef);

    return getDoc(userRef);
    // const userRef = collection(this.firestore, 'usuarios');
    // return getDoc
  }

  getUsuarios() {
    const userRef = collection(this.firestore, 'usuarios');
    return collectionData(userRef, { idField: 'id' });
  }
}
