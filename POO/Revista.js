import {Material} from "./Material.js"

export class Revista extends Material{
    constructor(titulo, disponibles, fecha){
        super(titulo, disponibles);
        this.fecha = fecha;
    }
}



