-- Criação do banco de dados;
CREATE DATABASE harry_potter;

--Entrar no banco de dados;
\c harry_potter;

--Criação da tabela de bruxos;
CREATE TABLE IF NOT EXISTS bruxos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    casa_hogwarts VARCHAR(100) NOT NULL,
    habilidade_especial VARCHAR(100) NOT NULL,
    status_sangue VARCHAR(7) NOT NULL,
    patrono VARCHAR(100)
);

--Criação da tabela de varinhas;
CREATE TABLE IF NOT EXISTS varinhas (
    id SERIAL PRIMARY KEY,
    material VARCHAR(100) NOT NULL,
    comprimento INT NOT NULL,
    nucleo VARCHAR(100) NOT NULL,
    data_fabricacao VARCHAR(100) NOT NULL
);

--Inserção de dados na tabela bruxos;
INSERT INTO bruxos (nome, idade, casa_hogwarts, habilidade_especial, status_sangue, patrono) VALUES ('Harry Potter', 18, 'Grifinória', 'Apanhar o Pomo de Ouro', 'mestiço', 'Golfinho');

INSERT INTO bruxos (nome, idade, casa_hogwarts, habilidade_especial, status_sangue, patrono) VALUES ('Hermione Granger', 18, 'Grifinória', 'Feitiços poderosos', 'trouxa', 'Lontra');

INSERT INTO bruxos (nome, idade, casa_hogwarts, habilidade_especial, status_sangue, patrono) VALUES ('Draco Malfoy', 18, 'Sonserina', 'Artes das Trevas', 'puro', 'Falcão');

INSERT INTO bruxos (nome, idade, casa_hogwarts, habilidade_especial, status_sangue, patrono) VALUES ('Luna Lovegood', 17, 'Lufa-Lufa', 'Visão além do alcance', 'puro', 'Lebre');

INSERT INTO bruxos (nome, idade, casa_hogwarts, habilidade_especial, status_sangue, patrono) VALUES ('Neville Longbottom', 18, 'Grifinória', 'Herbologia', 'puro', 'Sapo');

--Inserção de dados na tabela varinhas;
INSERT INTO varinhas (material, comprimento, nucleo, data_fabricacao) VALUES ('Teixo', 30, 'Pena de Fênix', '1998-01-01');

INSERT INTO varinhas (material, comprimento, nucleo, data_fabricacao) VALUES ('Carvalho', 28, 'Pelo de Unicórnio', '2005-01-01');

INSERT INTO varinhas (material, comprimento, nucleo, data_fabricacao) VALUES ('Azevinho', 25, 'Cabelo de Veela', '1990-01-01');

INSERT INTO varinhas (material, comprimento, nucleo, data_fabricacao) VALUES ('Nogueira', 32, 'Escama de Dragão', '2001-01-01');

INSERT INTO varinhas (material, comprimento, nucleo, data_fabricacao) VALUES ('Freixo', 27, 'Corda de Coração de Dragão', '1995-01-01');

--Query que seleciona todos os dados de uma tabela;
SELECT * FROM bruxos;
SELECT * FROM varinhas;


















