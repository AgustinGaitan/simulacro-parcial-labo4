import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from '../components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from '../components/actor-listado/actor-listado.component';
import { ActorPeliculaComponent } from '../components/actor-pelicula/actor-pelicula.component';
import { ActorComponent } from './actor.component';

const routes: Routes = [
  
  { path: '',
   component: ActorComponent
  },
  {
    path:'alta',
    component: ActorAltaComponent
  },
  {
    path:'listado',
    component: ActorListadoComponent
  },
  {
    path:'actorpelicula',
    component: ActorPeliculaComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
