use BibliotecaPOO;
create table Biblioteca(
    nombre VARCHAR(30) PRIMARY key,
    ciudad VARCHAR(30)
);

create table Material(
    biblioteca VARCHAR(30),
    titulo varchar(30),
    disponibles int,
    PRIMARY key(titulo, disponibles, biblioteca),
    Foreign Key (biblioteca) REFERENCES Biblioteca(nombre) 
);

create table Libros(
    titulo VARCHAR(30),
    disponibles int,
    autor VARCHAR(30),
    Foreign Key (titulo, disponibles) REFERENCES Material(titulo, disponibles)
);

create table Pelicula(
    titulo VARCHAR(30),
    disponibles int,
    director VARCHAR(30),
    genero varchar(30),
    Foreign Key (titulo, disponibles) REFERENCES Material(titulo, disponibles)
);

create table Revista(
    titulo VARCHAR(30),
    disponibles int,
    fecha date,
    Foreign Key (titulo, disponibles) REFERENCES Material(titulo, disponibles)
);

create table Personas(
    biblioteca varchar(30),
    nombre varchar(30),
    dni varchar(9),
    PRIMARY key(nombre, dni, biblioteca),
    Foreign Key (biblioteca) REFERENCES Biblioteca(nombre)
);

create table Socios(
    nombre varchar(30),
    dni varchar(9),
    recursos json,
    Foreign Key (nombre, dni) REFERENCES Personas(nombre, dni)
);

create table Administrador(
    nombre varchar(30),
    dni varchar(9),
    cargo varchar(30),
    Foreign Key (nombre, dni) REFERENCES Personas(nombre, dni)
);