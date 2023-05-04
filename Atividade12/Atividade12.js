function abreJanela() {
    document.getElementById("janela").src = "janelaaberta.png";
}

function fechaJanela() {
    document.getElementById("janela").src = "janelafechada.png";
}

function quebraJanela() {
    document.getElementById("janela").src = "janelaquebra.png";
    document.getElementById("janela").onclick = function() {return false;};
    document.getElementById("janela").onmouseover = function() {return false;};
    document.getElementById("janela").onmouseout = function() {return false;};
}