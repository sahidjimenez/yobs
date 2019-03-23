import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuarios } from "../interfaces/datos.interface";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private itemsCollection: AngularFirestoreCollection<Usuarios>;

  public usuarios : Usuarios[] = [];

  constructor(private afs: AngularFirestore) { }

  cargarUsuario(){

    this.itemsCollection = this.afs.collection<Usuarios>('usuarios');
    return this.itemsCollection.valueChanges()
                                .map( (usuarios:Usuarios[])=>{
                                  console.log( usuarios );
                                  this.usuarios = usuarios;
                                } )
  }


}
