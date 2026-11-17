import Produto from "./models/Produto.js";
import Pedido from "./models/Pedido.js";
import { horaAgora, formatarData } from "./relogio.js";

const reais = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

const acaraje = new Produto(1, "Acarajé", 1200, 30);
const pedido = new Pedido("Barra", horaAgora());
pedido.adicionarItem(acaraje, 3);

console.log(`Pedido feito em ${formatarData(pedido.criadoEm)}`);
console.log(`Total: ${reais.format(pedido.total() / 100)}`);