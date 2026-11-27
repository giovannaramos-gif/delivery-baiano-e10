
-- 1. Cardápio do dia
SELECT nome, preco_centavos
FROM produtos
WHERE ativo = true
ORDER BY preco_centavos;

-- 2. Produtos sem estoque
SELECT nome
FROM produtos
WHERE estoque_dia = 0;

-- 3. Atualizar estoque do produto
UPDATE produtos
SET estoque_dia = 10, ativo = true
WHERE id = 4;

-- 4. Fila da cozinha com nome do bairro
SELECT p.id, p.cliente, b.nome AS bairro,
       p.total_centavos, p.status
FROM pedidos p
JOIN bairros b ON b.id = p.bairro_id
ORDER BY p.criado_em;

-- 5. Itens do pedido 2
SELECT pr.nome, i.quantidade,
       i.preco_unitario_centavos,
       i.quantidade * i.preco_unitario_centavos AS subtotal
FROM itens_pedido i
JOIN produtos pr ON pr.id = i.produto_id
WHERE i.pedido_id = 2;

-- 6. Atualizar status do pedido 1
UPDATE pedidos
SET status = 'saiu para entrega'
WHERE id = 1;

-- 7. Testar separadamente no DB Fiddle
-- 7. Tentar apagar o acarajé
DELETE FROM produtos WHERE id = 1;

-- Desativar o produto em vez de apagar
UPDATE produtos SET ativo = false WHERE id = 1;
