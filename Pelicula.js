import {Material} from "./Material.js"

export class Pelicula extends Material{
    constructor(titulo, disponibles, director, genero){
        super(titulo, disponibles);
        this.director = director;
        this.genero = genero;
    }
}

function crearPelicula(){
    let tit = preguntar("Introduce titulo");
    let dispo = preguntar("Introduce los ejemplares disponibles: ");
    let dir = preguntar("Introduce el director: ");
    let gen = preguntar("Introduce el genero: ");
    let nuevaPeli = new Pelicula(tit, dispo, dir, gen);
    return nuevaPeli;
}

