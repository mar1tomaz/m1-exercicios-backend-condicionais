const rendaMensalEmCentavos = 300000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;

if (rendaMensalEmCentavos > 200000 && mesesDecorridos < 60 && totalJaPagoPeloAluno === 1800000) {
    let parcela = (rendaMensalEmCentavos * 0.18) * 0.001;
    console.log("Parcela é " + parcela.toFixed(2) + " reais!");
} else {
    console.log("Parcela é 0 reais!");
}