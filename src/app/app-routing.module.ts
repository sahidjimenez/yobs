import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CrearComponent } from './components/crear/crear.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { MisTrabajosComponent } from './components/mis-trabajos/mis-trabajos.component';
import { FeedComponent } from './components/feed/feed.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CrearUsuarioComponent } from "./components/crear-usuario/crear-usuario.component";
import{ AuthGuard } from'./guards/auth.guard';

const routes: Routes = [

  { path: '', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'admin', component:AdminComponent, canActivate:[AuthGuard]},
  { path: 'feed',component:FeedComponent,canActivate:[AuthGuard]},
  { path: 'crear-usuario',component:CrearUsuarioComponent,canActivate:[AuthGuard]},
  { path: 'detalles/:id', component:DetallesComponent, canActivate:[AuthGuard]},
  { path: 'edit/:id', component:EditComponent, canActivate:[AuthGuard]},
  { path: 'login', component:LoginComponent},
  { path: 'crear', component:CrearComponent, canActivate:[AuthGuard]},
  { path: 'mis-trabajos', component:MisTrabajosComponent, canActivate:[AuthGuard]},
  { path: '**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
