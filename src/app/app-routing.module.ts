import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


const routes: Routes = [
  {
    path: 'busqueda',
    component:BusquedaComponent
  },
  {
    path:'bienvenido',
    component:BienvenidoComponent
  },
  { path: 'peliculas', loadChildren: () => import('./peliculas-module/peliculas.module').then(m => m.PeliculasModule) },
  { path: 'actor', loadChildren: () => import('./actor-module/actor.module').then(m => m.ActorModule) },
  {
    path:'**',
    redirectTo: 'bienvenido'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
