DROP DATABASE IF EXISTS biblioteca_gen;
CREATE DATABASE IF NOT EXISTS biblioteca_gen;
USE biblioteca_gen;

CREATE TABLE biblioteca (
    id_biblioteca INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    pueblo VARCHAR(50)
);

CREATE TABLE tipo_recursos (
    id_tipo INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE recursos (
    id_recurso INT AUTO_INCREMENT PRIMARY KEY,
    id_biblioteca INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    disponibles INT DEFAULT 0,
    id_tipo INT NOT NULL,
    FOREIGN KEY (id_biblioteca) REFERENCES biblioteca(id_biblioteca),
    FOREIGN KEY (id_tipo) REFERENCES tipo_recursos(id_tipo)
);

CREATE TABLE personas (
    id_persona INT AUTO_INCREMENT PRIMARY KEY,
    id_biblioteca INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    dni VARCHAR(15) UNIQUE NOT NULL,
    tipo ENUM('socio','administrador') NOT NULL,
    FOREIGN KEY (id_biblioteca) REFERENCES biblioteca(id_biblioteca)
);

CREATE TABLE libros (
    id_libro INT PRIMARY KEY,
    autor VARCHAR(100),
    FOREIGN KEY (id_libro) REFERENCES recursos(id_recurso)
);

CREATE TABLE revistas (
    id_revista INT PRIMARY KEY,
    autor VARCHAR(100),
    fecha_publicacion DATE,
    FOREIGN KEY (id_revista) REFERENCES recursos(id_recurso)
);

CREATE TABLE peliculas (
    id_pelicula INT PRIMARY KEY,
    director VARCHAR(100),
    genero VARCHAR(50),
    FOREIGN KEY (id_pelicula) REFERENCES recursos(id_recurso)
);

CREATE TABLE socios (
    id_persona INT PRIMARY KEY,
    FOREIGN KEY (id_persona) REFERENCES personas(id_persona)
);

CREATE TABLE administradores (
    id_persona INT PRIMARY KEY,
    cargo VARCHAR(50),
    FOREIGN KEY (id_persona) REFERENCES personas(id_persona)
);

CREATE TABLE prestamos (
    id_prestamo INT AUTO_INCREMENT PRIMARY KEY,
    id_persona INT NOT NULL,
    id_recurso INT NOT NULL,
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE,
    devuelto BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_persona) REFERENCES personas(id_persona),
    FOREIGN KEY (id_recurso) REFERENCES recursos(id_recurso)
);

DELIMITER //
CREATE TRIGGER bajar_disponibles
BEFORE INSERT ON prestamos
FOR EACH ROW
BEGIN
    UPDATE recursos
    SET disponibles = disponibles - 1
    WHERE id_recurso = NEW.id_recurso AND disponibles > 0;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER subir_disponibles
AFTER UPDATE ON prestamos
FOR EACH ROW
BEGIN
    IF NEW.devuelto = TRUE THEN
        UPDATE recursos
        SET disponibles = disponibles + 1
        WHERE id_recurso = NEW.id_recurso;
    END IF;
END;
//
DELIMITER ;