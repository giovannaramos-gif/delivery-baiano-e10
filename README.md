# delivery-baiano-e10
Sistema de pedidos do restaurante Axé Delivery, com a culinária baiana.

## Como rodar

Na pasta do repositório:

    npm install
    npm start                 # monta dois pedidos com as classes
    npm run dev               # o mesmo, rodando de novo cada vez que salvar
    npm test                  # confere as regras e o cardápio
    node src/pedido-agora.js  # um pedido com a hora de agora

## Bibliotecas

| Biblioteca | Versão | Para quê | Licença |
|---|---|---|---|
| dayjs | ^1.11.23 | data e hora do pedido em português | MIT |

## npm audit

Rodado em 17/11/2026: `found 0 vulnerabilities`.

## Pedidos em arquivo

Os pedidos ficam em `data/pedidos.json` (fora do Git: cada máquina tem os seus).

    node src/salvar-pedido.js   # grava um pedido novo, com o próximo número
    node src/listar-pedidos.js  # mostra os pedidos gravados

## Testes manuais (Aula 14)

| # | O que fiz | Esperado | Deu certo? |
|---|---|---|---|
| 1 | Apaguei a pasta data e rodei node src/listar-pedidos.js | 0 pedido(s) no arquivo | sim |
| 2 | node src/salvar-pedido.js | Pedido 1 gravado: 3 pratos, R$ 46,00 | sim |
| 3 | node src/salvar-pedido.js de novo | Pedido 2 gravado | sim |
| 4 | Fechei o terminal, abri outro e rodei node src/listar-pedidos.js | 2 pedido(s) no arquivo, #1 e #2 | sim |
| 5 | Busquei o pedido 99 | O pedido 99 não existe | sim |

## Banco de dados (PostgreSQL)

Para testar sem instalar nada: db-fiddle.com, Database PostgreSQL 17.
Cole o `db/schema.sql` e, embaixo, o `db/seed.sql` no painel Schema SQL,
as consultas do `db/consultas.sql` no Query SQL, e clique em Run.

Na máquina, precisa do PostgreSQL 16 ou mais novo e do pgAdmin 4.
1. No pgAdmin: Databases > Create > Database, nome `delivery`.
2. Botão direito no `delivery` > Query Tool > Open File > `db/schema.sql` > F5.
3. Open File > `db/seed.sql` > F5.
4. Para conferir: `db/consultas.sql`, uma consulta por vez.
Para recomeçar do zero, rode o `schema.sql` e o `seed.sql` de novo.

Pelo psql (SQL Shell, no Windows), as barras do caminho são `/`:
```sql
\c delivery
\i 'D:/projetos/delivery-baiano-e10/db/schema.sql'
\i 'D:/projetos/delivery-baiano-e10/db/seed.sql'