import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaAltaComponent } from '../components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from '../components/pelicula-listado/pelicula-listado.component';
import { PeliculasComponent } from './peliculas.component';

const routes: Routes = [

  { path: '', 
  component: PeliculasComponent 
  },
  {
    path:'alta',
    component:PeliculaAltaComponent
  },
  {
    path:'listado',
    component: PeliculaListadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
