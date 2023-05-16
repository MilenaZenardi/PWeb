function validarForm() {
    var nome = document.nomeForm.elements["nome"].value;
    var email = document.nomeForm.elements["email"].value;
    var comentario = document.nomeForm.elements["comentario"].value;
    var pesquisa = document.nomeForm.elements["pesquisa"].value;
      
    if (nome.length < 10) {
        alert
    alert("O nome deve ter no mínimo 10 caracteres.");
        return false;
      }
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("O email deve ser válido, contendo '@' e '.'.");
        return false;
      }
    if (comentario.length < 20) {
    alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
      }
    if (pesquisa === "") {
        alert("A pesquisa é obrigatória.");
        return false;
      }
    if (pesquisa === "sim") {
    alert("Que bom que você voltou a visitar esta página!");
      } 
    else {
        alert("Volte sempre a esta página!");
      }
    }