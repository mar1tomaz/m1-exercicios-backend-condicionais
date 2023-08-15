
const tipoDePagamento = "credito";
const valorDoProduto = 13000;

if (tipoDePagamento === 'credito') {
    console.log(valorDoProduto - (valorDoProduto * 0.05));
} else if (tipoDePagamento === 'cheque') {
    console.log(valorDoProduto - (valorDoProduto * 0.03));
} else if (tipoDePagamento === 'debito ou dinheiro') {
    console.log(valorDoProduto - (valorDoProduto * 0.10));
} else {
    console.log("NÃO É UM MEIO DE PAGAMENTO!");
}
