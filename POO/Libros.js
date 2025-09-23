import {Material} from "./Material.js"

export class Libros extends Material{
    constructor(titulo, disponibles, autor){
        super(titulo, disponibles);
        this.autor = autor;
    }
}

function crearLibro(tit, dispo, aut){
    let nuevoLibro = new Libros(tit, dispo, aut);
    return nuevoLibro;
}