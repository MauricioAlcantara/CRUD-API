# CRUD-API para Posts de Rede Social

Este projeto é uma API desenvolvida em Node.js para gerenciar postagens de uma rede social. Ele fornece funcionalidades para criar, listar, editar e excluir postagens. A API se conecta ao banco de dados MongoDB para armazenar e recuperar as informações dos posts.

## Requisitos

- Node.js
- MongoDB

## Instalação

1. Clone o repositório:

```
git clone https://github.com/MauricioAlcantara/CRUD-API.git
```

2. Entre no diretório do projeto:

```
cd CRUD-API
```

3. Instale as dependências:

```
npm install
```

4. Configure a URL de conexão do seu banco de dados MongoDB no arquivo `loaders/mongodb.js`. Substitua a URL de conexão existente pela sua URL de conexão:

```javascript
const mongoose = require('mongoose');

mongoose.set('strictQuery', true)

async function startDB(){
    await mongoose.connect('sua-url-de-conexao-do-mongodb');
}

module.exports = startDB;
```

5. Inicie o servidor:

```
npm start
```

O servidor estará rodando no endereço `http://localhost:3000`.

## Endpoints

A API possui os seguintes endpoints:

- `GET /run`: Verifica se o servidor está funcionando.
- `POST /posts`: Adiciona uma nova postagem.
- `GET /posts`: Lista todas as postagens.
- `GET /posts/:id`: Retorna uma postagem específica pelo ID.
- `PUT /posts/:id`: Atualiza uma postagem pelo ID.
- `DELETE /posts/:id`: Exclui uma postagem pelo ID.

## Estrutura do projeto

O projeto é organizado da seguinte forma:

- `controllers`: Contém os controladores responsáveis pela lógica de negócio da API.
- `models`: Contém os esquemas de dados e modelos do MongoDB.
- `routes`: Contém as rotas da API.

## Exemplo de uso

Para adicionar uma postagem, faça uma requisição `POST` para o endpoint `/posts` com o seguinte corpo JSON:

```json
{
  "usuario": "nomeusuario",
  "descricao": "descrição da postagem",
  "moeda": "tipo de moeda"
}

Para listar todas as postagens, faça uma requisição GET para o endpoint /posts.
```

## Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue ou crie um pull request para colaborar no projeto.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter detalhes.

