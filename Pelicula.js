export class Pelicula extends Mterial{
    constructor(titulo, ejemplares, director, genero){
        super(titulo, ejemplares);
        this.director = director;
        this.genero = genero;
    }
}

