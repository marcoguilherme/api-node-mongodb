# api-node-mongodb
API Rest com o funcionamento basico do CRUD usando o mongodb como banco de dados rodando no NodeJS.

## Requisitos

* nodejs
* mongodb cominunity

## Executando

Navegue ate o diretorio onde deseja guardar o projeto usando o terminal e digite os seguintes com,andos

`git clone https://github.com/marcoguilherme/api-node-mongodb`

apos o termino da clonagem sera necessario instalar todas as dependencias do projeto, par aisso digite no terminal o seguinte comando.

`npm install`

Pronto todas as dependencias foram instaladas.

### Dependencias utilizadas

* body-parser
* express
* mongoose
* consign

Antes de executar o projeto certifique-se de colocar as informacoes da conexao para o mongodb instalado em seu computador no arquivo 

`config/server.js`

Por fim ao configurar a conexao ao projeto basta executar e acessar no caminho http://localhost:3000

`npm start` ou `nodemon app` ou `node app`

### Rotas utilizadas

#### Listagem de livros - method (get)

cminho-do-servidor/api/books

#### Listagem de livro por id - method (get)

caminho-do-servidor/apli/book/_id

#### Inserir livro - method (post)

caminho-do-servidor/apli/book

#### Inserir livro - method (put)

caminho-do-servidor/apli/book/_id

#### Inserir livro - method (delete)

caminho-do-servidor/apli/book/_id


#### Listagem de Genero - method (get)

cminho-do-servidor/api/genres

#### Listagem de Genero por id - method (get)

caminho-do-servidor/apli/genre/_id

#### Inserir Genero - method (post)

caminho-do-servidor/apli/genre

#### Inserir Genero - method (put)

caminho-do-servidor/apli/genre/_id

#### Inserir Genero - method (delete)

caminho-do-servidor/apli/genre/_id


