import { Component, OnInit } from '@angular/core';
import { NgForm }  from "@angular/forms";

//interfaces
import { Trabajos }  from "../../interfaces/datos.interface";


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  trabajo:Trabajos = {
    nombre:'',
    descripcion_trabajo:''

  }

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.trabajo);

  }

}
