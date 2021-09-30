export class Pelicula {

    nombre : any;
    tipo : any;
    fechaEstreno : any;
    cantidadPublico :any;
    foto : any;
    actor : any;
    
    constructor(nombreParam : any, tipoParam : any, fechaEstrenoParam : any, cantidadPublicoParam :any, fotoParam : any, actorParam : any){
        this.nombre = nombreParam;
        this.tipo = tipoParam;
        this.fechaEstreno = fechaEstrenoParam;
        this.cantidadPublico = cantidadPublicoParam;
        this.foto = fotoParam;
        this.actor = actorParam;
    }
    
}
