import { Personas } from "./Personas.js"

export class Socios extends Personas{
    constructor(nombre, dni, listaL){
        super(nombre, dni);
        this.listaL = [];
    }
}

function crearSocio(){
    let nom = preguntar("Nombre: ");
    let dni = preguntar("DNI: ");
    let nuevoSocio = new Socios(nom, dni);
    return nuevoSocio;
}

