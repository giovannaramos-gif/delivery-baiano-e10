const CARDAPIO = [
    { id: 1, nome: "Acarajé", preco: 1200, estoque: 30, ativo: true },
    { id: 2, nome: "Abará", preco: 1000, estoque: 20, ativo: true },
    { id: 3, nome: "Moqueca de peixe", preco: 4200, estoque: 8, ativo: true },
    { id: 4, nome: "Bobó de camarão", preco: 3800, estoque: 0, ativo: false },
    { id: 5, nome: "Vatapá", preco: 1500, estoque: 15, ativo: true },
    { id: 6, nome: "Cocada", preco: 600, estoque: 40, ativo: true },
];

function buscarProduto(id) {
    return CARDAPIO.find((produto) => produto.id === id);
}

function listarAtivos() {
    return CARDAPIO.filter((produto) => produto.ativo);
}

module.exports = { CARDAPIO, buscarProduto, listarAtivos };