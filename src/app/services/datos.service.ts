import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Trabajos } from "../interfaces/datos.interface";
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private itemsCollection: AngularFirestoreCollection<Trabajos>;


  public datos :Trabajos[] = [];

  constructor(private afs: AngularFirestore){ }

  cargarDatos(){

    this.itemsCollection = this.afs.collection<Trabajos>('trabajos');
    return this.itemsCollection.valueChanges()
                                .map( (trabajos:Trabajos[])=>{
                                  console.log( trabajos );
                                  this.datos = trabajos;
                                } )

  }
  
  agregarTrabajo( texto:string ){

    let trabajo : Trabajos ={

      nombre:'Demo',
      descripcion_trabajo:texto,
      fecha:new Date().getTime()
      //localizacion?:number,
      //uid?:string,

    }
    return this.itemsCollection.add(trabajo);

  }
}
