import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service";
import { AuthService } from "../../services/auth.service";
import { Usuarios }  from "../../interfaces/datos.interface";

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit {

  public usuarios : Usuarios[]=[];

  constructor(public _dt: UsuariosService,
              private AuthService: AuthService)
              {}

  ngOnInit() {
  }




  onComprobarUserLogin(usuarios){
    this.AuthService.getAuth().subscribe(auth => {
      if(auth){
        usuarios.isLogin =true;
        usuarios.userNombre = auth.displayName;
        usuarios.userEmail = auth.email;
        usuarios.userPicture = auth.photoURL;
        usuarios.userId = auth.uid;

        //console.log(this.userId);
      }else{
        usuarios.isLogin = false;
      }
    })
  }

  crearEmpleador(){
    
  }


  crearEmpleado(){}

}
