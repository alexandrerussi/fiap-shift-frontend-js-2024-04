document.getElementById("somar").addEventListener("click", () => {
    let numA = +document.getElementById("primeiro-numero").value;
    let numB = +document.getElementById("segundo-numero").value;

    let soma = numA + numB;

    let pResultado = document.getElementById("resultado");
    pResultado.innerHTML = `O resultado da soma é: ${soma}`;
});


function subtrair() {
    let numA = +document.getElementById("primeiro-numero").value;
    let numB = +document.getElementById("segundo-numero").value;

    let subtracao = numA - numB;

    document.getElementById("resultado").innerHTML = `O resultado da subtração é: ${subtracao}`;
}


document.getElementById("multiplicar").addEventListener("click", () => {
    let numA = +document.getElementById("primeiro-numero").value;
    let numB = +document.getElementById("segundo-numero").value;

    let multi = numA * numB;

    document.getElementById("resultado").innerHTML = `O resultado da multiplicação é: ${multi}`;
});

function dividir() {
    let numerador = +document.getElementById("primeiro-numero").value;
    let denominador = +document.getElementById("segundo-numero").value;

    let retornoMsg;
    if (denominador != 0) {
        retornoMsg = `O resultado da divisão é ${numerador / denominador}`;
    } else {
        retornoMsg = "ERRO! Você não pode dividir por zero.";
    }

    document.getElementById("resultado").innerHTML = retornoMsg;
}