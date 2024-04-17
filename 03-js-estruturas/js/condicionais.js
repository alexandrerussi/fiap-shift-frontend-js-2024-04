// IF => SE a CONDIÇÃO for verdadeira.. ENTÃO execute algo!!

// IF a condição for verdadeira...

// --------------------------------------
// ESTRUTURA CONDICIONAL SIMPLES
// --------------------------------------

// let idade = 15;

// let spanIdade = document.getElementById("span-idade");
// spanIdade.innerText = idade;

// let verificaIdade = document.querySelector("#verifica-idade");

// if (idade < 18) {
//     console.log("Menor de idade!");
//     verificaIdade.innerHTML= "O usuário é <strong>menor de idade</strong>";
//     verificaIdade.className = "dark";
// }


// console.log("FIM DO CÓDIGO");


// --------------------------------------
// ESTRUTURA CONDICIONAL COMPOSTA!!!!!
// --------------------------------------

/*

    SE (CONDICAO) {

    } SENAO {

    }

*/

// let idade = 20;

// let spanIdade = document.getElementById("span-idade");
// spanIdade.innerText = idade;

// let verificaIdade = document.querySelector("#verifica-idade");

// if (idade < 18) {
//     console.log("Menor de idade!");
//     verificaIdade.innerHTML= "O usuário é <strong>menor de idade</strong>";
//     verificaIdade.className = "dark";
// } else {
//     console.log("Maior de idade");
//     verificaIdade.innerHTML= "O usuário é <strong>maior de idade</strong>";
//     verificaIdade.className = "light";
// }


// console.log("FIM DO CÓDIGO");



// --------------------------------------
// ESTRUTURA CONDICIONAL ENCADEADA!!!!!
// --------------------------------------


let mae = "qlqr pessoa";

// if (mae.toLowerCase() == "beyonce") {
//     console.log("tu é MUITO RICO");
// } else {
//     if (mae.toLowerCase() == "vihtube") {
//         console.log("muito menos rico q o filho da beyounce");
//     } else {
//         console.log("provavelmente tu é pobre");
//     }
// }

// ESTRUTURA CONDICIONAL ENCADEADA MELHORADA...

// if (mae == "beyonce") {
//     console.log("tu é MUITO RICO");
// } else if (mae == "vihtube") {
//     console.log("muito menos rico que o filho da beyonce");
// } else if (mae == "rainha") {
//     console.log("tu já nasce famoso e rico");
// } else {
//     console.log("tu é pobre e ngm sabe de ti");
// }


// IF TERNÁRIO

let mes = 7; // abril

// let semestre;

// if (mes <= 6) {
//     semestre = "1º Semestre";
// } else {
//     semestre = "2º Semestre";
// }

let semestre = mes <= 6 ? "1º Semestre" : "2º Semestre";

console.log(`Estamos no ${semestre}`);