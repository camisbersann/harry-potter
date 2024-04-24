const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT= 4000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'harry_potter',
    password: 'ds564',
    port: 5432,
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('A rota está funcionado!')
});

app.get('/bruxos', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM bruxos');
        res.json({
            total: resultado.rowCount,
            bruxo: resultado.rows,
        });
    } catch (error) {
       console.error('Erro ao obter todos os bruxos', error); 
       res.status(500).send('Erro ao obter todos os bruxos');
    }
});

app.get('/varinhas', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM varinhas');
        res.json({
            total: resultado.rowCount,
            varinha: resultado.rows,
        });
    } catch (error) {
       console.error('Erro ao obter todas as varinhas', error); 
       res.status(500).send('Erro ao obter todas as varinhas');
    }
});

app.post('/bruxos', async (req, res) => {
    try {
        const { nome, idade, casa_hogwarts, habilidade_especial, status_sangue, patrono } = req.body;

        let sangues=['puro', 'mestiço', 'trouxa'];
        let casas=['Grifinória', 'Sonserina', 'Lufa-Lufa', 'Corvinal'];

        if(!sangues.includes(status_sangue)){
            return res.status(400).send({ message: 'Status de Sangue inválida'})
        }

        if(!casas.includes(casa_hogwarts)){
            return res.status(400).send({ message: 'Casa de Hogwarts inválida'})
        }

        await pool.query('INSERT INTO bruxos (nome, idade, casa_hogwarts, habilidade_especial, status_sangue, patrono) VALUES ($1, $2, $3, $4, $5, $6)', [nome, idade, casa_hogwarts, habilidade_especial, status_sangue, patrono]);
        res.status(201).send({ mensagem: 'Bruxo criado com sucesso! 💋' });
    }   catch (error) {
        console.error('Erro ao criar bruxo', error);
        res.status(500).json({ message: 'Erro ao criar bruxo' });
    }
});

app.post('/varinhas', async (req, res) => {
    try {
        const { material, comprimento, nucleo, data_fabricacao } = req.body;

        await pool.query('INSERT INTO varinhas (material, comprimento, nucleo, data_fabricacao) VALUES ($1, $2, $3, $4)', [material, comprimento, nucleo, data_fabricacao]);
        res.status(201).send({ mensagem: 'Varinha criado com sucesso! 💋' });
    }   catch (error) {
        console.error('Erro ao criar varinha', error);
        res.status(500).json({ message: 'Erro ao criar varinha' });
    }
});

app.delete('/bruxos/:id', async (req, res) => {
    try {
        const { id } = req.params;
         await pool.query('DELETE FROM bruxos WHERE id = $1', [id]);
        res.status(200).send({mensagem: 'Bruxo deletado com sucesso'});
    } catch (error) {
        console.error('Erro ao deletar bruxo', error); 
       res.status(500).send('Erro ao deletar bruxo');
    }
});

app.delete('/varinhas/:id', async (req, res) => {
    try {
        const { id } = req.params;
         await pool.query('DELETE FROM varinhas WHERE id = $1', [id]);
        res.status(200).send({mensagem: 'Varinha deletado com sucesso'});
    } catch (error) {
        console.error('Erro ao deletar varinha', error); 
       res.status(500).send('Erro ao deletar varinha');
    }
});

app.put('/bruxos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, idade, casa_hogwarts, habilidade_especial, status_sangue, patrono } = req.body;

        await pool.query('UPDATE bruxos SET nome = $1, idade = $2, casa_hogwarts = $3, habilidade_especial = $4, status_sangue = $5, patrono = $6 WHERE id = $7', [nome, idade, casa_hogwarts, habilidade_especial, status_sangue, patrono, id]);
        res.status(201).send({mensagem: 'Bruxo atualizado com sucesso'});
    } catch (error) {
        console.error('Erro ao atualizar bruxo', error); 
       res.status(500).send('Erro ao atualizar bruxo');
    }
});

app.put('/varinhas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { material, comprimento, nucleo, data_fabricacao } = req.body;

        await pool.query('UPDATE varinhas SET material = $1, comprimento = $2, nucleo = $3, data_fabricacao = $4 WHERE id = $5', [material, comprimento, nucleo, data_fabricacao, id]);
        res.status(201).send({mensagem: 'Varinha atualizado com sucesso'});
    } catch (error) {
        console.error('Erro ao atualizar varinha', error); 
       res.status(500).send('Erro ao atualizar varinha');
    }
});

app.get('/bruxos/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query('SELECT * FROM bruxos WHERE id = $1', [id]);
        if(resultado.rowCount == 0){
            res.status(404).send({mensagem: 'Id não encontrado'})
        } else{
            res.json({
                bruxo: resultado.rows[0],
            });
        }
        
    } catch (error) {
        console.error('Erro ao obter bruxo pelo id', error); 
        res.status(500).send('Erro ao obter bruxo pelo id');
    }
})

app.get('/varinhas/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query('SELECT * FROM varinhas WHERE id = $1', [id]);
        if(resultado.rowCount == 0){
            res.status(404).send({mensagem: 'Id não encontrado'})
        } else{
            res.json({
                varinha: resultado.rows[0],
            });
        }
        
    } catch (error) {
        console.error('Erro ao obter varinha pelo id', error); 
        res.status(500).send('Erro ao obter varinha pelo id');
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});