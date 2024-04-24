document.getElementById("somar").addEventListener("click", () => {
    let numA = +document.getElementById("primeiro-numero").value;
    let numB = +document.getElementById("segundo-numero").value;

    let soma = numA + numB;

    let pResultado = document.getElementById("resultado");
    pResultado.innerHTML = `O resultado da soma é: ${soma}`;
});
