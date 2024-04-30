// Faça um método (FUNÇÃO) que receba como parâmetro (argumento) a idade de uma pessoa.
// A função deve retornar a string se o voto da pessoa é:
//     ▪ Obrigatório
//     ▪ Proibido
//     ▪ Opcional
// Exiba esse retorno (DOM)

document.addEventListener("DOMContentLoaded", function () {

    function verificaVotoIdade(idade) {
        if (idade < 16) {
            return "Proibido";
        } else if ((idade >= 16 && idade < 18) || idade > 70) {
            return "Opcional";
        } else {
            return "Obrigatório";
        }
    }

    document.getElementById("btn-verificar-idade").addEventListener("click", function() {
        let idade = +document.getElementById("input-idade").value;

        let statusVoto = verificaVotoIdade(idade);
        console.log(`A idade digitada é de: ${idade} anos. Sendo assim, o voto é: ${statusVoto} `);

        // é uma tag <p> que está sendo criada <p></p>
        let pResultadoStatus = document.createElement("p");

        // <p>A idade digitada é de: ${idade} anos. Sendo assim, o voto é: ${statusVoto}</p>
        pResultadoStatus.innerHTML = `A idade digitada é de: ${idade} anos. Sendo assim, o voto é: ${statusVoto}`;
        
        // nesse momento, eu coloco a tag <p>...</p> dentro do meu body
        document.body.appendChild(pResultadoStatus);
    });

});