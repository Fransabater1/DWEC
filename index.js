import { Administrador } from './Administrador.js';
import { Libros } from './Libros.js';
import { Pelicula } from './Pelicula.js';
import { Revista } from './Revista.js';
import { Socios } from './Socios.js';
import readline from "readline";
import { Personas } from "./Personas.js";
import { Material } from './Material.js';
import { normalize } from 'path';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(pregunta){
    return new Promise(resolve => rl.question(pregunta + ' ', r => resolve(r.trim())))
}


const libro1 = new Libros("Wiggeta", "Willyrex", 20);
const pelicula1 = new Pelicula("Seven", "David Fincher", "drama", 5);
const revista1 = new Revista("Playboy", "11-07-2025", 22);
const socio1 = new Socios("Paco", "20964073X");
const adm1 = new Administrador("Juan", "20432175X", "Administrador");

let opcion = 0;
let socios = [];
let admins = [];
let pelis = [];
let libros = [];
let revistas =[];

do{
    menu();
}while(opcion != 12);

    async function menu(){
    console.log("Menu");
    console.log("1. Añadir Libro");
    console.log("2. Añadir revista");
    console.log("3. Añadir una pelicula");
    console.log("4. Añadir un socio");
    console.log("5. Añadir un admin");
    console.log("6. Prestar servicio");
    console.log("7. Devolver libro");
    console.log("8. Lista de recursos");
    console.log("9. Lista de socios");
    console.log("10. Lista de admins");
    console.log("11. Lista de recuros de socios");
    console.log("12. Salir");
    opcion = await preguntar('Elige una opcion: ');

    switch (opcion){
        case 1:
            let libroCreado = crearLibro();
            libroCreado.push(libros);
            break;

        case 2:
            let revistaCreada = crearRevista();
            revistaCreada.push(revistas);
            break;

        case 3:
            let peliCreada = crearPelicua();
            peliCreada.push(pelis);
            break;

        case 4:
            let socioCreado = crearSocio();
            socioCreado.push(socios);
            break;

        case 5:
            let adminCreado = crearAdmin();
            adminCreado.push(admins);
            break;

        case 6:
            let preg = preguntar("1-Libro / 2-Pelicula / 3-Revista: ")
            if (preg == 1){
                let m = preguntar("Introduce el nombre del libro: ");
                let p = validaSocio();
                Prestar(m, p);
            }else if (preg == 2){
                let m = preguntar("Introduce el nombre de la pelicula: ");
                let p = validaSocio();
                Prestar(m, p);
            }else if (preg == 3){
                let m = preguntar("Introduce el nombre de la revista: ");
                let p = validaSocio();
                Prestar(m, p);
            }else{
                console.log("El servicio no existe");
            }
            break;

        case 7:
            let s = validaSocio();
            let l = preguntar("Introduce el libro: ");
            Devolver(s, l);
            break;

        case 8:
            mostrarRecursos();
            break;
        case 9:
            mostrarSocios();
            break;

        case 10:
            mostrarAdministrador();

        case 11:
            let socio = validaSocio();
            mostrarRecursosS(socio);
            break;
            
    }
    }
    

function Prestar(m, p){
    if (m.disponibles <= 0){
        console.log("No quedan disponibles");
    }else if( p.listaL.length >= 3){
        console.log("Has superado el limite de libros prestados");
    }else{
        m.push(p.listaL);
        m.disponibles-1;
        console.log("Libro agregador correctamente")
    }
}

function Devolver(s, l){
    for (i = 0; i<s.listaL.length; i++){
        if (s.listaL[i] == l){
            s.listaL = s.listaL.filter(x => x !== l);
            l.disponibles +1;
            console.log("Libro devuleto exitosamente");
        }else{
            console.log("El usuario no tiene ese libro");
        }
    }
}

function mostrarSocios(){
    for (i=0; i<socios.length; i++){
        console.log(socios[i]+ " ");
    }
}

function mostrarAdministrador(){
    for (i=0; i<admins.length; i++){
        console.log(socios[i]+ " ");
    }
}

function mostrarRecursosS(socio){
    for (i=0; i<admins.length; i++){
        console.log(socio.listaL[i]+ " ");
    }
}

async function validaSocio(){
    let dni = await preguntar("Dime tu dni: ")
    for (i = 0; i<socios.length; i++){
        if (dni == socios[i].dni){
            nombre = socios[i];
            return nombre;
        }else{
            console.log("No se encuentra el socio")
        }
    }
}

function mostrarRecursos(){
    console.log("Libros")
    for(i = 0; i<libros.length; i++){
        console.log(libros[i] + " ");
    }
    console.log("Peliculas")
    for(i = 0; i<libros.length; i++){
        console.log(pelis[i] + " ");
    }
    console.log("Revistas")
    for(i = 0; i<libros.length; i++){
        console.log(revistas[i] + " ");
    }
}



