let numeroA = 6;
let numeroB = 2;

console.log(`Número A: ${numeroA}`);
console.log(`Número B: ${numeroB}`);

console.log(" -------- ");
console.log(" ");

// SOMA
let soma = numeroA + numeroB;
console.log(`Soma é: ${soma}`);

// SUBTRAÇÃO
let subtracao = numeroA - numeroB;
console.log(`Subtração é: ${subtracao}`);

// MULTIPLICAÇÃO
let multi = numeroA * numeroB;
console.log(`Multiplicação é: ${multi}`);

// DIVISÃO
let divisao = numeroA / numeroB;
console.log(`Divisão é: ${divisao}`);

// MÓDULO -- RESTO DE UMA DIVISÃO
let resto = numeroA % numeroB;
console.log(`Resto da divisão: ${resto}`);

// POTÊNCIA
let potencia = numeroA ** numeroB;
console.log(`Potência é: ${potencia}`);


console.log(" -------- ");
console.log(" ");

// OPERADORES DE INCREMENTO E DECREMENTO!!
let num = 5;

num = num + 1; // num = 6!

// operador UNÁRIO!
num++; // num = 7

console.log(num); // num = 7

console.log(num++); // PÓS-FIXADO!!

console.log(num); // num = 8

console.log(++num); // PRÉ-FIXADO!! --- num = 9


num--; // num = 8

console.log(num);


// OPERADORES DE ATRIBUIÇÃO

// num = num + 20;

num += 20;
console.log(`Operador de atribuição: ${num}`);

// num = num / 2;
num /= 2;
console.log(`Operador de atribuição: ${num}`);

// num = num * 5;
num *= 5;
console.log(`Operador de atribuição: ${num}`);


// OPERADOR DE CONCATENAÇÃO -- CONCATENAÇÃO DE STRINGS

let texto = "minha" + "string";
console.log(texto);

console.log("2" + 4);
console.log(4 + "2");