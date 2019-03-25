import { Component, OnInit } from '@angular/core';
import { NgForm }  from "@angular/forms";

//interfaces
import { Trabajos }  from "../../interfaces/datos.interface";
//servicios
import { DatosService } from "../../services/datos.service";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  trabajo:Trabajos = {
    nombre_trabajo:'',
    descripcion_trabajo:''

  }

  constructor( public _dt:DatosService) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.trabajo);

    this._dt.agregarTrabajo(this.trabajo.nombre_trabajo, this.trabajo.descripcion_trabajo);
    this.trabajo.nombre_trabajo='';
    this.trabajo.descripcion_trabajo='';
  }

}
