// SWITCH / CASE é uma outra estrutura CONDICIONAL

// ESCOLHA... CASO

/*

    escolha (variavel) {
        caso "1":
            faça alguma coisa
    }

*/

// tipoUsuario = 1 >> usuário comum
// tipoUsuario = 2 >> usuário admin

let tipoUsuario = 43;

let pTipoUsuario = document.getElementById("tipo-usuario");
console.log(pTipoUsuario);

switch (tipoUsuario) {
    case 1:
        console.log("Usuário comum");
        pTipoUsuario.innerHTML = "Usuário comum";
        break;
    case 2:
        console.log("Usuário admin");
        pTipoUsuario.innerHTML = "Usuário admin";
        break;
    default:
        console.log("Usuário inválido");
        pTipoUsuario.innerHTML = "Usuário inválido";
}


let diaDaSemana = "Quarta";

switch (diaDaSemana) {
    case "Segunda":
        console.log("Hoje vai ser um dia difícil...");
        break;
    case "Terça":
        console.log("Hoje é dia de estudar JS");
        break;
    case "Quarta":
        console.log("Hoje é dia de ir ao mercado -- SWITCH/CASE");
        break;
    case "Quinta":
        console.log("Hoje é dia de ir ao médico");
        break;
    default: 
        console.log("Dia inválido.")
}

if (diaDaSemana === "Segunda") {
    console.log("Hoje vai ser um dia difícil...");
} else if (diaDaSemana == "Terça") {
    console.log("Hoje é dia de estudar JS");
} else if (diaDaSemana == "Quarta") {
    console.log("Hoje é dia de ir ao mercado -- IF/ELSE");
} else if (diaDaSemana == "Quinta") {
    console.log("Hoje é dia de ir ao médico");
} else {
    console.log("Dia inválido");
}