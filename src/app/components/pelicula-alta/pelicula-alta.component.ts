import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  controlesAltaPelicula !: FormGroup;
  agregado : boolean = false;

  constructor(private fb : FormBuilder, private peliculaService : PeliculaService) { }

  ngOnInit(): void {

    this.controlesAltaPelicula = this.fb.group({
      'nombre': ['', [Validators.required]],
      'tipo': ['', [Validators.required]],
      'actor': ['', Validators.required],
      'cantidadPublico': ['', Validators.required],
      'fechaEstreno': ['', Validators.required],
      'foto': ['', Validators.required]
    });
  }

  getNombre(){
    return this.controlesAltaPelicula.get('nombre')?.value;
  }

  getTipo(){
    return this.controlesAltaPelicula.get('tipo')?.value;
  }

  getFecha(){
    return this.controlesAltaPelicula.get('fechaEstreno')?.value;
  }

  getCantidadPublico(){
    return this.controlesAltaPelicula.get('cantidadPublico')?.value;
  }

  getFoto(){
    return this.controlesAltaPelicula.get('foto')?.value;
  }

  getActor(){
    return this.controlesAltaPelicula.get('actor')?.value;
  }


  EnviarAltaPelicula(){

    let pelicula : Pelicula = new Pelicula(this.getNombre(), 
                                            this.getTipo(),
                                            this.getFecha(), 
                                            this.getCantidadPublico(),
                                            "fotoTest", 
                                            this.getActor());
    this.peliculaService.SetearPelicula({... pelicula})
    .then(()=>{

      console.log('seteada');
    });
    
  }

  MostrarActorSeleccionado(e : any){
    let parametro = `${e.nombre} ${e.apellido}`;
    this.controlesAltaPelicula.get('actor')?.setValue(parametro);
  }

  
  Agregar(){
    this.agregado = true;
    this.controlesAltaPelicula.reset();
    setTimeout(() => {
      this.agregado = false;
    }, 3000);
  }

}
