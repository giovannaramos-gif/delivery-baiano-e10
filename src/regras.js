// src/regras.js - as regras do pedido da Dona Ju, em funções
const { buscarProduto } = require("./dados/cardapio.js");
const PEDIDO_MINIMO = 3000;

// Soma preço vezes quantidade, prato por prato
function calcularSubtotal(precos, qtds) {
  let subtotal = 0;
  for (let i = 0; i < precos.length; i++) {
    subtotal += precos[i] * qtds[i];
  }
  return subtotal;
}

// Soma os itens do pedido: [{ id, qtd }, ...], com o preço do cardápio
function subtotalDosItens(itens) {
  return itens.reduce((soma, item) => soma + buscarProduto(item.id).preco * item.qtd, 0);
}

// Taxa de entrega pelo bairro (0 se fora da área)
function calcularTaxa(bairro) {
  const taxas = {
    "Barra": 600,
    "Rio Vermelho": 500,
    "Pituba": 500,
    "Centro": 500,
    "Graça": 500,
    "Ondina": 500
  };
  return taxas[bairro] !== undefined ? taxas[bairro] : 0;
}

// Cupom PRIMEIRA10: 10% nos itens, só na primeira compra
function calcularDesconto(subtotal, cupom, primeiraCompra) {
  if (cupom === "PRIMEIRA10" && primeiraCompra) {
    return Math.round(subtotal * 0.10);
  }
  return 0;
}

// Pedidos das 11h às 22h; 22h em ponto já recusa
function dentroDoHorario(hora) {
  return hora >= 11 && hora < 22;
}

// Devolve o motivo da recusa, ou "" quando o pedido pode seguir
function motivoDaRecusa(pedido) {
  if (!dentroDoHorario(pedido.hora)) {
    return "pedidos só das 11h às 22h";
  }

  const bairrosAtendidos = ["Barra", "Rio Vermelho", "Pituba", "Centro", "Graça", "Ondina"];
  if (!bairrosAtendidos.includes(pedido.bairro)) {
    return `não entregamos em ${pedido.bairro}`;
  }

  if (subtotalDosItens(pedido.itens) < PEDIDO_MINIMO) {
    return "abaixo do mínimo de R$ 30,00 em itens";
  }

  return "";
}

// Total: itens, menos o desconto, mais a taxa de entrega
function calcularTotal(pedido) {
  const subtotal = subtotalDosItens(pedido.itens);
  const desconto = calcularDesconto(subtotal, pedido.cupom, pedido.primeiraCompra);
  const taxa = calcularTaxa(pedido.bairro);
  return subtotal - desconto + taxa;
}

module.exports = {
  calcularSubtotal,
  subtotalDosItens,
  calcularTaxa,
  calcularDesconto,
  dentroDoHorario,
  motivoDaRecusa,
  calcularTotal,
};

module.exports = {
  calcularSubtotal,
  calcularTaxa,
  calcularDesconto,
  dentroDoHorario,
  motivoDaRecusa,
  calcularTotal,
  PEDIDO_MINIMO,
};