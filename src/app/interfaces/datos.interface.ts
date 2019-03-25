

export interface Trabajos{

  nombre_trabajo:string;
  descripcion_trabajo:string;
  localizacion?:number;
  fecha?:number;
  uid?:string;

}
export interface Usuarios{

  userNombre:string;
  userEmail:string;
  userFoto:string;
  userUid:string;
  tipo_user?:string;
  isLogin:boolean;

}
