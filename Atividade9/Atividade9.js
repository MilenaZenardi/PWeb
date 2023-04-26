function maior(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    maior = 0;

    if(num1 > num2 && num1 > num3){
        maior = num1;
    }
    else if(num2 > num1 && num2 > num3){
        maior = num2;
    }
    else{
        maior = num3;
    }
    alert("O maior número é "+maior);
}

function ordenar(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    if(num1 < num2 && num2 < num3){
        alert("A ordem é " + num1 + " " + num2 + " " + num3);
    }
    else if(num2 < num1 && num1 < num3){
        alert("A ordem é " + num2 + " " + num1 + " " + num3);
    }
    else if(num3 < num2 && num2 < num1){
        alert("A ordem é " + num3 + " " + num2 + " " + num1);
    }
    else if(num1 < num3 && num3 < num2){
        alert("A ordem é " + num1 + " " + num3 + " " + num2);
    }
    else if(num2 < num3 && num3 < num1){
        alert("A ordem é " + num2 + " " + num3 + " " + num1);
    }
    else{
        alert("A ordem é " + num3 + " " + num1 + " " + num2);
    }
}