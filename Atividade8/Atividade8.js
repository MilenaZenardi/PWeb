var somaIdades = 0;
var qtdePessimo = 0;
var qtdeBomOtimo = 0;
var qtdeHomens = 0;
var qtdeMulheres = 0;
var maisNova = 0;
var maisVelha = 100;
var totalEntrevistados = 0;
var listaPessoas = new Array();

function enviar() {
    var idade = parseInt(document.getElementById("idade").value);
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var opiniao = parseInt(document.getElementById("opiniao").value);
   
  
    var pessoa = {
      idade: idade,
      sexo: sexo,
      opiniao: opiniao
    }
    
    listaPessoas.push(pessoa);
  
    totalEntrevistados = listaPessoas.length;
  
    for (var i = 0; i < listaPessoas.length; i++) {
      var p = listaPessoas[i];
  
      somaIdades += p.idade;
  
      if (p.opiniao == 1) {
        qtdePessimo++;
      } else if (p.opiniao == 4 || p.opiniao == 3) {
        qtdeBomOtimo++;
      }
  
      if (p.sexo == "masculino") {
        qtdeHomens++;
      } else if (p.sexo == "feminino") {
        qtdeMulheres++;
      }
  
      if (p.idade > maisVelha) {
        maisVelha = p.idade;
      }
  
      if (p.idade < maisNova) {
        maisNova = p.idade;
      }
    }
  
    var mediaIdade = somaIdades / totalEntrevistados;
    var porcentagemBomOtimo = (qtdeBomOtimo / totalEntrevistados) * 100;
  
    document.getElementById("mediaIdade").innerHTML = mediaIdade.toFixed(2);
    document.getElementById("maisVelha").innerHTML = maisVelha;
    document.getElementById("maisNova").innerHTML = maisNova;
    document.getElementById("qtdePessimo").innerHTML = qtdePessimo;
    document.getElementById("porcentagem").innerHTML = porcentagemBomOtimo.toFixed(2) + "%";
    document.getElementById("qtdeMulheres").innerHTML = qtdeMulheres;
    document.getElementById("qtdeHomens").innerHTML = qtdeHomens;
  }