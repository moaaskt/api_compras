# API de Compras

## Visão Geral

A API de Compras é um serviço que permite gerenciar e registrar informações relacionadas a compras e transações financeiras. Ela oferece recursos para criar, visualizar, atualizar e excluir compras, bem como consultar detalhes de transações.

## Recursos

- Criação, leitura, atualização e exclusão de compras.
- Consulta de detalhes de transações financeiras.
- Autenticação e autorização de usuários.


## Exemplo de uso:

### Criar uma Compra:

```http

POST /compras
```
Envie um JSON no corpo da solicitação contendo os detalhes da compra para criar uma nova compra.

### Obter Detalhes de uma Compra:

```http
GET /compras/:id

```
Substitua :id pelo ID da compra desejada para obter seus detalhes.

### Atualizar uma Compra:

```http
PUT /compras/:id
```
Substitua :id pelo ID da compra que deseja atualizar e envie um JSON no corpo da solicitação com os novos detalhes.

### Excluir uma Compra:

```http
DELETE /compras/:id
```
Substitua :id pelo ID da compra que deseja excluir.


### Obter Todas as Compras:
```http
GET /compras
```
Obtenha a lista de todas as compras registradas.

### Valot total das compras:
```http
GET /valor-total
```
Obtém a lista com o valor total da compra
## Documentação da API

Para informações detalhadas sobre os endpoints e como utilizar a API, consulte a nossa [Documentação da API](link-para-documentacao).

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT) para autenticação

## Status do Desenvolvimento

O desenvolvimento da API de Compras está em andamento. Novos recursos e melhorias estão sendo implementados regularmente.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
