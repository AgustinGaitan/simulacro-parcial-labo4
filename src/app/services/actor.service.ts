import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../clases/actor';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  
   actores: Observable<Actor[]>;
   actorCollection : AngularFirestoreCollection<Actor>;

  constructor(private firestore : AngularFirestore) {
    this.actorCollection = firestore.collection<Actor>('actores');
     this.actores = this.actorCollection.valueChanges();
  }

  SetearActor(actor : Actor){
    return this.actorCollection.add({... actor});
  }
}
