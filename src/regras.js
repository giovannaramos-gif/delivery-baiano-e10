// src/regras.js - as regras do pedido da Dona Ju
const PRECOS = [1200, 1000, 4200, 3800, 1500, 600];
const PEDIDO_MINIMO = 3000;

// Passo 2: Subtotal
function calcularSubtotal(precos, qtds) {
  let subtotal = 0;
  for (let i = 0; i < precos.length; i++) {
    subtotal += precos[i] * qtds[i];
  }
  return subtotal;
}

// Passo 3: Taxa de Entrega por Bairro
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

// Passo 3: Horário de Funcionamento (11h às 21h59)
function dentroDoHorario(hora) {
  return hora >= 11 && hora < 22;
}

// Passo 4: Desconto
function calcularDesconto(subtotal, cupom, primeiraCompra) {
  if (cupom === "PRIMEIRA10" && primeiraCompra) {
    return Math.round(subtotal * 0.10);
  }
  return 0;
}

// Passo 4: Motivos de Recusa
function motivoDaRecusa(pedido) {
  if (!dentroDoHorario(pedido.hora)) {
    return "pedidos só das 11h às 22h";
  }

  const bairrosAtendidos = ["Barra", "Rio Vermelho", "Pituba", "Centro", "Graça", "Ondina"];
  if (!bairrosAtendidos.includes(pedido.bairro)) {
    return `não entregamos em ${pedido.bairro}`;
  }

  const subtotal = calcularSubtotal(PRECOS, pedido.qtds);
  if (subtotal < PEDIDO_MINIMO) {
    return "abaixo do mínimo de R$ 30,00 em itens";
  }

  return "";
}

// Passo 5: Total do Pedido
function calcularTotal(pedido) {
  const subtotal = calcularSubtotal(PRECOS, pedido.qtds);
  const taxa = calcularTaxa(pedido.bairro);
  const desconto = calcularDesconto(subtotal, pedido.cupom, pedido.primeiraCompra);
  
  return subtotal + taxa - desconto;
}

module.exports = {
  PRECOS,
  PEDIDO_MINIMO,
  calcularSubtotal,
  calcularTaxa,
  dentroDoHorario,
  calcularDesconto,
  motivoDaRecusa,
  calcularTotal
};