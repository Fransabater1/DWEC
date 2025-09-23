import {Material} from "./Material.js"

export class Pelicula extends Material{
    constructor(titulo, disponibles, director, genero){
        super(titulo, disponibles);
        this.director = director;
        this.genero = genero;
    }
}



