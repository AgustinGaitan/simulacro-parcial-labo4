import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  peliculas: Observable<Pelicula[]>;
  peliculasCollection : AngularFirestoreCollection<Pelicula>;

  constructor(private firestore : AngularFirestore) { 

    this.peliculasCollection = firestore.collection<Pelicula>('peliculas');
    this.peliculas = this.peliculasCollection.valueChanges();

  }

  SetearPelicula(pelicula : Pelicula){
    return this.peliculasCollection.add({... pelicula});
  }
}
