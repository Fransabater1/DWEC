import { Administrador } from './Administrador';
import { Libros } from './Libros';
import { Pelicula } from './Pelicula';
import { Revista } from './Revista';
import { Socios } from './Socios';


const libro1 = new Libros("Wiggeta", "Willyrex", 20);
const pelicula1 = new Pelicula("Seven", "David Fincher", "drama", 5);
const revista1 = new Revista("Playboy", "11-07-2025", 22);
const socio1 = new Socios("Paco", "20964073X");
const adm1 = new Administrador("Juan", "20432175X", "Administrador");

function Prestar(m, p){
    if (m.ejemplares <= 0){
        console.log("No quedan ejemplares");
    }else if( p.listaL.length >= 3){
        console.log("Has superado el limite de libros prestados");
    }else{
        m.push(p.listaL);
        m.ejemplares-1;
        console.log("Libro agregador correctamente")
    }
}

function Devolver(s, l){
    
}