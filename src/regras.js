function calcularSubtotal(precos, qtds) {
  let subtotal = 0;
  for (let i = 0; i < precos.length; i++) {
    subtotal += precos[i] * qtds[i];
  }
  return subtotal;
}

function calcularTotal(pedido) {
  const subtotal = calcularSubtotal(PRECOS, pedido.qtds);
  const desconto = calcularDesconto(subtotal, pedido.cupom, pedido.primeiraCompra);
  const taxa = calcularTaxa(pedido.bairro);
  return subtotal - desconto + taxa;
}