import {Material} from "./Material.js"

export class Pelicula extends Material{
    constructor(titulo, disponibles, director, genero){
        super(titulo, disponibles);
        this.director = director;
        this.genero = genero;
    }
}

function crearPelicula(tit, dispo, dir, gen){
    let nuevaPeli = new Pelicula(tit, dispo, dir, gen);
    return nuevaPeli;
}

