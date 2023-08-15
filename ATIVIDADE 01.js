const jogada1 = "pedra";
const jogada2 = "tesoura";
if (jogada1 === jogada2) {
    console.log("Empate");
} else if (
    (jogada1 === "pedra" && jogada2 === "tesoura") || (jogada1 === "tesoura" && jogada2 === "papel") || (jogada1 === "papel" && jogada2 === "pedra")) {
    console.log("Jogada1 venceu");
} else {
    console.log("Jogada2 venceu");
}
// pedra > tesoura || tesoura > papel || papel > pedra