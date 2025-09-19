import { prependListener } from "process";
import {Material} from "./Material.js"

export class Libros extends Material{
    constructor(titulo, disponibles, autor){
        super(titulo, disponibles);
        this.autor = autor;
    }
}

function crearLibro(){
    let tit = preguntar("Introduce titulo");
    let dispo = preguntar("Introduce los ejemplares disponibles: ");
    let aut = preguntar("Introduce el autor: ");
    let nuevoLibro = new Libros(tit, dispo, aut);
    return nuevoLibro;
}