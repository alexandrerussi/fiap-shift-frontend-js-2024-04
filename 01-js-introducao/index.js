console.log("Hello World");

// PARA DECLARAR VARIÁVEIS EU TENHO
// let
// var -- não consigo explicar agora -- EVITEM!!!
// const

// CENAS DOS PRÓXIMOS CAPÍTULOS!!!!

/*
    ISSO É
    UM COMENTÁRIO
    EM MÚLTIPLAS
    LINHAS
*/

// TEXTO -- STRING
let nomePessoa = "Alexandre";
console.log(nomePessoa, typeof(nomePessoa));

// NUMEROS -- NUMBERS

let idade = 24; // numero inteiro => integer
console.log(idade, typeof(idade));

let preco = 10.90; // numero decimal => float ou double
console.log(preco, typeof(preco));

// console.log(" ");
// console.log(typeof(preco)); // Verificação do tipo da variável


// VALORES LÓGICOS -- BOOLEANS
let autenticado = true;
console.log(autenticado, typeof(autenticado));

let email;
console.log(email, typeof(email));

let nulo = null;
console.log(nulo, typeof(nulo));

/// AHHH... AGORA EU VOU INSERIR UM VALOR NO MEU E-MAIL
email = "a@b.com";
console.log(email, typeof(email));

email = false;
console.log(email, typeof(email));


// VARIÁVEIS CONSTANTES
const CPF = "123.456.789-00";
console.log(CPF, typeof(CPF));

// CPF = "987.654.321-99";
// console.log(CPF, typeof(CPF));

const PI = 3.1415;


// COERÇÃO IMPLÍCITA -- CONVERSÃO DE VALORES DE FORMA IMPLÍCITA
let variavelQualquer = `3` + 2;
console.log(variavelQualquer, typeof(variavelQualquer));

// COERÇÃO EXPLÍCITA -- CONVERSÃO DE VALORES DE FORMA EXPLÍCITA

// Number()
let pontos = Number("120");
console.log(pontos, typeof(pontos));

// Boolean()
let valorLogico = ""; // TEXTO!!!!!
valorLogico = Boolean(valorLogico);
console.log(valorLogico, typeof(valorLogico));


// PEDIR VALORES PARA O USUÁRIO???
let nomeDigitado = prompt("Digite seu nome");

alert(`Olá, ${nomeDigitado}! Seja bem-vindo!!`);