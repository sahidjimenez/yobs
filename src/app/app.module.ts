import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MisTrabajosComponent } from './components/mis-trabajos/mis-trabajos.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { EditComponent } from './components/edit/edit.component';
import { CrearComponent } from './components/crear/crear.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';


//servicios
import { AuthService } from './services/auth.service';
import { DatosService } from "./services/datos.service";
import { UsuariosService } from './services/usuarios.service';

import { environment } from '../environments/environment';
import { AuthGuard }from'./guards/auth.guard';
import { FeedComponent } from './components/feed/feed.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MisTrabajosComponent,
    AdminComponent,
    AboutComponent,
    NotFoundComponent,
    LoginComponent,
    DetallesComponent,
    EditComponent,
    CrearComponent,
    FeedComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuard,DatosService,UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
