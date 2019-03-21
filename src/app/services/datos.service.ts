import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { trabajos } from "../interfaces/datos.interface";
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private itemsCollection: AngularFirestoreCollection<trabajos>;


  public datos :trabajos[] = [];

  constructor(private afs: AngularFirestore){ }

  cargarDatos(){

    this.itemsCollection = this.afs.collection<trabajos>('trabajos');
    return this.itemsCollection.valueChanges();

  }
}
