import { prependListener } from "process";
import { Personas } from "./Personas.js"

export class Administrador extends Personas{
    constructor(nombre, dni, cargo){
        super(nombre, dni);
        this.cargo = cargo;
    }
}
function crearSocio(){
    let nom = preguntar("Nombre: ");
    let dni = preguntar("DNI: ");
    let cargo = preguntar("Cargo: ")
    let nuevoAdmin = new Administrador(nom, dni);
    return nuevoAdmin;
}
