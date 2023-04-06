function calcular() {

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);


    var soma = num1 + num2;
    var subtracao = num1 - num2;
    var produto = num1 * num2;
    var divisao = num1 / num2;
    var resto = num1 % num2;


    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Soma: " + soma + "<br>" +
        "Subtração: " + subtracao + "<br>" +
        "Produto: " + produto + "<br>" +
        "Divisão: " + divisao + "<br>" +
        "Resto: " + resto;
}