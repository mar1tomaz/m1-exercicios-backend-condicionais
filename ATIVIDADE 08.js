const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;
if (!possuiPatologia && idade > 12 && altura > 150) {
    if (!ehEstudante) {
        console.log("20 reais");
    } else {
        console.log("10 reais");
    }
} else {
    console.log("ACESSO NEGADO");
}
