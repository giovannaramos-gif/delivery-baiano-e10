-- db/seed.sql - os dados iniciais: bairros, cardápio, cupom e dois pedidos de exemplo
-- Rodar depois do schema.sql. Os ids nascem na ordem dos INSERT.
SET client_encoding TO 'UTF8';

INSERT INTO bairros (nome, taxa_entrega) VALUES
    ('Rio Vermelho', 500),
    ('Barra', 600),
    ('Pituba', 700),
    ('Itapuã', 900);

-- Mesma ordem do src/dados/cardapio.csv: o id 1 continua sendo o acarajé
INSERT INTO produtos (nome, descricao, preco_centavos, estoque_dia, ativo) VALUES
    ('Acarajé', 'Bolinho de feijão-fradinho frito no dendê, com vatapá e camarão.', 1200, 30, true),
    ('Abará', 'Massa de feijão-fradinho cozida na folha de bananeira.', 1000, 20, true),
    ('Moqueca de peixe', 'Peixe no leite de coco e dendê, com arroz e pirão.', 4200, 8, true),
    ('Bobó de camarão', 'Creme de aipim com camarão e leite de coco, com arroz.', 3800, 0, false),
    ('Vatapá', 'Creme de pão, amendoim, castanha e camarão seco, com arroz.', 1500, 15, true),
    ('Cocada', 'Doce de coco queimado. A sobremesa da casa.', 600, 40, true);

INSERT INTO cupons (codigo, percentual, apenas_primeira_compra) VALUES
    ('PRIMEIRA10', 10, true);

-- Dois pedidos de exemplo, para treinar SELECT e JOIN
-- Pedido 1: Joana, 3 acarajés para a Barra = 3600 + 600 = 4200
INSERT INTO pedidos (cliente, telefone, bairro_id, endereco, forma_pagamento, subtotal_centavos, taxa_entrega_centavos, total_centavos)
VALUES ('Joana', '71999990000', 2, 'Rua das Flores, 10', 'pix', 3600, 600, 4200);

INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unitario_centavos)
VALUES (1, 1, 3, 1200);

-- Pedido 2: Carlos, 1 moqueca e 2 cocadas para Itapuã = 5400 + 900 = 6300
INSERT INTO pedidos (cliente, telefone, bairro_id, endereco, forma_pagamento, subtotal_centavos, taxa_entrega_centavos, total_centavos, status)
VALUES ('Carlos', '71988887777', 4, 'Rua do Farol, 200', 'dinheiro', 5400, 900, 6300, 'em preparo');

INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unitario_centavos)
VALUES
    (2, 3, 1, 4200),
    (2, 6, 2, 600);