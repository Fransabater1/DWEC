import {Material} from "./Material.js"

export class Revista extends Material{
    constructor(titulo, disponibles, fecha){
        super(titulo, disponibles);
        this.fecha = fecha;
    }
}

function crearRevista(){
    let tit = preguntar("Introduce titulo");
    let dispo = preguntar("Introduce los ejemplares disponibles: ");
    let fecha = preguntar("Introduce la fecha: ");
    let nuevaRevista = new Revista(tit, dispo, fecha);
    return nuevaRevista;
}

