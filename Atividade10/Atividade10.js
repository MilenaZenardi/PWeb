function criarAluno() {

    var aluno1 = {};
    aluno1.RA = 12345;
    aluno1.nome = "João da Silva";

    var aluno2 = {};
    aluno2["RA"] = 67890;
    aluno2["nome"] = "Maria Oliveira";

    var aluno3 = {
        RA: 24680,
        nome: "Pedro Santos"
    };

    var resultado = "Forma 1: RA = " + aluno1.RA + ", Nome = " + aluno1.nome + "<br>";
    resultado += "Forma 2: RA = " + aluno2.RA + ", Nome = " + aluno2.nome + "<br>";
    resultado += "Forma 3: RA = " + aluno3.RA + ", Nome = " + aluno3.nome + "<br>";
    document.getElementById("aluno").innerHTML = resultado;
}