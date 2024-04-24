CREATE DATABASE harry_potter;

CREATE TABLE IF NOT EXISTS bruxos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    casa_hogwarts VARCHAR(100) NOT NULL,
    habilidade_especial VARCHAR(100) NOT NULL,
    status_sangue VARCHAR(7) NOT NULL,
    patrono VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS varinhas (
    id SERIAL PRIMARY KEY,
    material VARCHAR(100) NOT NULL,
    comprimento INT NOT NULL,
    nucleo VARCHAR(100) NOT NULL,
    data_fabricacao VARCHAR(100) NOT NULL
);

