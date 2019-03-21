import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private itemsCollection: AngularFirestoreCollection<any>;


  public datos :any[] = [];

  constructor(private afs: AngularFirestore){ }

  cargarDatos(){

    this.itemsCollection = this.afs.collection<any>('trabajos');
    return this.itemsCollection.valueChanges();

  }
}
