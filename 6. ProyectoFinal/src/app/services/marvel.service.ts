import { Injectable } from '@angular/core';
import {
  API_PRIVATE_KEY,
  BASE_URL,
  API_PUBLIC_KEY,
  TIMESTAMP,
  HASH,
} from '../components/config/config.const';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {
  collection,
  Firestore,
  addDoc,
  getDoc,
  doc,
  collectionData,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
} from '@angular/fire/firestore';
import { Ipersonaje } from '../interfaces/ipersonaje';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(
    private readonly http: HttpClient,
    private firestore: Firestore
  ) {}

  getPersonajes() {
    const url = `${BASE_URL}/v1/public/characters?ts=${TIMESTAMP}&apikey=${API_PUBLIC_KEY}&hash=${HASH}&limit=12`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.data.results;
      })
    );
  }

  getPersonajeById(id: string) {
    const url = `${BASE_URL}/v1/public/characters/${id}?ts=${TIMESTAMP}&apikey=${API_PUBLIC_KEY}&hash=${HASH}`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.data.results;
      })
    );
  }

  addPersonaje(personaje: Ipersonaje) {
    if (personaje.id) {
      const personajeRef = doc(this.firestore, `personajes/${personaje.id}`);
      return updateDoc(personajeRef, {
        name: personaje.name,
        description: personaje.description,
        image: personaje.image,
        series: personaje.series,
        comics: personaje.comics,
      });
    } else {
      const personajeRef = collection(this.firestore, 'personajes');
      return addDoc(personajeRef, personaje);
    }
  }

  getMyPersonajes() {
    const personajeRef = collection(this.firestore, 'personajes');
    return collectionData(personajeRef, { idField: 'id' });
  }

  deletePersonajeById(personaje: Ipersonaje) {
    const personajeRef = doc(this.firestore, `personajes/${personaje.id}`);
    return deleteDoc(personajeRef);
  }

  getMyPersonajeById(id: string) {
    const personajeRef = doc(this.firestore, `personajes/${id}`);
    return getDoc(personajeRef);
  }

  getMyPersonajeByQuery(email: string) {
    const personajeRef = collection(this.firestore, 'personajes');
    const queryAux = query(personajeRef, where('creator', '==', email));
    return getDocs(queryAux);
  }
}
