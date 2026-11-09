// src/regras.js - as regras do pedido da Dona Ju
const PRECOS = [1200, 1000, 4200, 3800, 1500, 600];
const PEDIDO_MINIMO = 3000;

// Passo 2: Integrante 1
function calcularSubtotal(precos, qtds) {
  let subtotal = 0;
  for (let i = 0; i < precos.length; i++) {
    subtotal += precos[i] * qtds[i];
  }
  return subtotal;
}

// Passo 3: Integrante 2 (mantém 0 por enquanto)
function calcularTaxa(bairro) {
  return 0;
}

// Passo 4: Integrante 3 (mantém 0 por enquanto)
function calcularDesconto(subtotal, cupom, primeiraCompra) {
  return 0;
}

// Passo 3: Integrante 2 (mantém false por enquanto)
function dentroDoHorario(hora) {
  return false;
}

// Passo 4: Integrante 3 (mantém "" por enquanto)
function motivoDaRecusa(pedido) {
  return "";
}

// Passo 2: Integrante 1
function calcularTotal(pedido) {
  const subtotal = calcularSubtotal(PRECOS, pedido.qtds);
  const desconto = calcularDesconto(subtotal, pedido.cupom, pedido.primeiraCompra);
  const taxa = calcularTaxa(pedido.bairro);
  return subtotal - desconto + taxa;
}

module.exports = {
  calcularSubtotal,
  calcularTaxa,
  calcularDesconto,
  dentroDoHorario,
  motivoDaRecusa,
  calcularTotal,
};