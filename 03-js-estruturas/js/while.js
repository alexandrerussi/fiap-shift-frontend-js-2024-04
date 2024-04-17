// console.log("Produto");
// console.log("Produto");
// console.log("Produto");
// console.log("Produto");
// console.log("Produto");
// console.log("Produto");


// ESTRUTURA DE REPETIÇÃO WHILE

/*
    ENQUANTO (CONDIÇÃO FOR VERDADEIRA) {
        REPETE OQ ESTÁ AQUI DENTRO
    }
*/

// let condicao = true;
// while (condicao) {
//     console.log("Produto");
//     condicao = false;
// }

let contProduto = 0;

while (contProduto < 10) {
    contProduto++;

    // MODIFICADORES DE FLUXO

    if (contProduto == 3 || contProduto == 5) {
        continue;
    }

    if (contProduto == 7) {
        break;
    }


    console.log(`Produto: ${contProduto}`);
}

console.log("FIM");

// DESAFIO 1: COMO EU FAÇO PARA IR DE 10 ATÉ 0
// DESAFIO 2: COMO VERIFICAR QUE O USUÁRIO DIGITOU ALGO ERRADO E SOLICITAR NOVAMENTE