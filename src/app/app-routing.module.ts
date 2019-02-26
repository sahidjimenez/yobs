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

import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [

  { path: '', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'detalles/:id', component:DetallesComponent},
  { path: 'edit/:id', component:EditComponent},
  { path: 'login', component:LoginComponent},
  { path: 'crear', component:CrearComponent},
  { path: 'mis-trabajos', component:MisTrabajosComponent},
  { path: '**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
