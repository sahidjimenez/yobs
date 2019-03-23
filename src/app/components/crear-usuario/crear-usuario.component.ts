import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit {

  constructor(public _dt: UsuariosService,
              private authService: AuthService)
              {}

  ngOnInit() {
  }


}
