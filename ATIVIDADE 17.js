//valor do produto comprado.
const valorDoProduto = 100000;
//quantidade de parcelas
const quantidadeDoParcelamento = 10;
//valor pago
const valorPago = 300;

const valorRestante = valorDoProduto - valorPago;
const valorParcela = valorRestante / (quantidadeDoParcelamento - 1);

console.log(`Restam ${quantidadeDoParcelamento - 1} parcelas de R$${valorParcela.toFixed(2)}`);
