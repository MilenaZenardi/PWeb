function playerPC() {
    const escolhaPC = ["pedra", "papel", "tesoura"];
    return escolhaPC[Math.floor(Math.random() * escolhaPC.length)];
}


function player1(escolhaJogador) {
    const escolhaPC = playerPC();
    let result;

    if (escolhaJogador === escolhaPC) {
        resultado = "Empatou.";
    } else if (
        (escolhaJogador === "pedra" && escolhaPC === "tesoura") ||
        (escolhaJogador === "papel" && escolhaPC === "pedra") ||
        (escolhaJogador === "tesoura" && escolhaPC === "papel")
    ) {
        resultado = "Você ganhou.";
    } else {
        resultado = "Computador ganhou.";
    }


    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `Sua escolha foi ${escolhaJogador}, a escolha do computador foi ${escolhaPC}. ${resultado}`;
}