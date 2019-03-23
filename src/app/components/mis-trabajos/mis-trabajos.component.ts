import { Component, OnInit } from '@angular/core';

//servicios
import { DatosService } from "../../services/datos.service";

@Component({
  selector: 'app-mis-trabajos',
  templateUrl: './mis-trabajos.component.html',
  styleUrls: ['./mis-trabajos.component.css']
})
export class MisTrabajosComponent implements OnInit {

  constructor( public _dt: DatosService) {

    this._dt.cargarDatos()
      .subscribe();

  }

  ngOnInit() {
  }

}
