<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
  
  <p align="center">Primeito projeto feito com o framework nest.</p>


## Descrição

Backend de um projeto simples de to do.

## Rotas
- `GET /tasks`: Listar todas as tasks
```js
// Response: StatusCode: 200 (OK)
[
  {
    id: 0,
    description: "",
    completed: boolean
  }
]
```

- `GET /tasks/:id`: Listar task pelo id
```js
// Request(Params):
{
  id: 0
}
// Response: StatusCode: 200 (OK)
{
  id: 0,
  description: "",
  completed: boolean
}
```

- `POST /task`: Cadastro de nova task
```js
// Request(Body):
{
  description: "",
  completed: boolean
}
// Response: StatusCode: 201 (Created)
{
  id: 0,
  description: "",
  completed: boolean
}
```

- `PUT /task/:id`: Atualizar task
```js
// Request(Body):
{
  description: "",
  completed: boolean
}
// Request(Params):
{
  id: 0
}
// Response: StatusCode: 200 (OK)
{
  id: 0,
  description: "",
  completed: boolean
}
```

- `DELETE /tasks/:id`: Deletar task pelo id
```js
// Request(Params):
{
  id: 0
}
// Response: StatusCode: 200 (OK)
```

## Instalação

```bash
$ npm install
```

## Env
Variaveis de ambiente
```yaml
dev:
  port: 3000
  startItems: true
prod:
  port: 3333
  startItems: false
```


## Execução
Para executar o projeto use:(Projeto rodando na porta)


```bash
# development
$ npm run start

# watch mode
# http://localhost:3000
$ npm run start:dev

# production mode
# http://localhost:3333
$ npm run start:prod
```

## Testes

```bash
$ npm run test
```