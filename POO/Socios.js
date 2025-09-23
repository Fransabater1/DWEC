import { Personas } from "./Personas.js"

export class Socios extends Personas{
    constructor(nombre, dni, listaL){
        super(nombre, dni);
        this.listaL = [];
    }
}

function crearSocio(nom, dni){
    let nuevoSocio = new Socios(nom, dni);
    return nuevoSocio;
}

