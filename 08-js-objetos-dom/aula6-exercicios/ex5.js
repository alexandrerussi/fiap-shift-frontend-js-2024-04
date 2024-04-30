document.addEventListener("DOMContentLoaded", function() {

    function verificaParImpar(num) {
        // IF É UMA ESTRUTURA CONDICIONAL
        if (num % 2 == 0) {
            return "O número é par";
        } else {
            return "O número é ímpar";
        }
    }

    document.getElementById("btn-verifica").addEventListener("click", function () {
        
        let numero = +document.getElementById("input-numero").value;

        // NÃO QUERO CRIAR VÁRIOS H2!!!!
        // let h2RetornoNum = document.createElement("h2");

        // EU QUERO SELECIONAR UMMM H2 E TROCAR O VALOR DELE
        let h2RetornoNum = document.getElementById("resultado");
        h2RetornoNum.innerHTML = verificaParImpar(numero);

        // document.body.appendChild(h2RetornoNum);

    });

});