import { Personas } from "./Personas.js"

export class Administrador extends Personas{
    constructor(nombre, dni, cargo){
        super(nombre, dni);
        this.cargo = cargo;
    }
}
function crearSocio(nom, dni, cargo){
    let nuevoAdmin = new Administrador(nom, dni, cargo);
    return nuevoAdmin;
}
