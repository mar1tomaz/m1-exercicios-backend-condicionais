const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 30000; //emreais
const minimoDeRendimento = 28559.70
if (!aposentada || !portadoraDeDoenca) {
    if (totalDeRendimentos > minimoDeRendimento) {
        console.log("PEGA LEAO")
    } else {
        console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
    }
} else {
    console.log("ISENTA");
}