-- Creamos una bbdd con el nombre: search_history_db
CREATE DATABASE search_history_db;

USE search_history_db;

-- Y la tabla que vamos a usar para registrar las búsquedas
CREATE TABLE search_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    search_term VARCHAR(255) NOT NULL,
    search_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
