// OPERADORES LÓGICOS!

// E    &&
// OU   ||
// NOT  !



// LÓGICA E (&&)

// EMAIL        SENHA       ENTRAR NO SISTEMA (email && senha)
// true         true        true
// true         false       false
// false        true        false
// false        false       false

// IMAGINA QUE ESSA É A INFORMAÇÃO QUE O USUÁRIO PRECISA ACERTAR
let email = "a@b.com";
let senha = "123";

// USUÁRIO DIGITA:
let emailDigitado = prompt("Digite o e-mail: ");
let senhaDigitada = prompt("Digite sua senha: ");

console.log(`Verificação do e-mail: ${emailDigitado == email}`);
console.log(`Verificação da senha:  ${senhaDigitada == senha}`);

let verificacaoEmail = emailDigitado == email;
let verificacaoSenha = senhaDigitada == senha;

console.log(verificacaoEmail, verificacaoSenha);

// console.log((emailDigitado == email) && (senhaDigitada == senha));
console.log(verificacaoEmail && verificacaoSenha);



console.log(" ");
console.log("----");
console.log(" ");

// LÓGICA OU (||)

// SOLZAO       JOGO BR     CHURRAS NO DOM.
// true         true        true
// true         false       true
// false        true        true
// false        false       false


let sol = false;
let chuva = true;
let jogoBr = false;
let aniversario = true;

console.log(!chuva || sol || jogoBr || aniversario);


// OPERADOR NOT (!)
console.log(!sol);


console.log(" ");
console.log("----");
console.log(" ");


// VERIFICAÇÃO DE IDADE DO VOTO OPCIONAL
// idade maior que 16 e idade menor que 18 => verificaMenorIdade
// OU
// idade maior que 70 => verificaMaiorIdade

let idade = 17;

let verificaMenorIdade = idade >= 16 && idade < 18;
console.log(`Verificação de voto opc. de menor de idade: ${verificaMenorIdade}`);

let verificaMaiorIdade = idade > 70;
console.log(`Verificação de voto opc. de maior de idade: ${verificaMaiorIdade}`);

// APLICAÇÃO DO OU -- JUNTAR A EXPRESSÃO LÓGICA PARA DE FATO VERIFICAR SE O VOTO É OPCIONAL OU NÃO

console.log(verificaMenorIdade || verificaMaiorIdade);

let verificaOpcional = verificaMenorIdade || verificaMaiorIdade;

// EXPRESSÃO LÓGICA SEM VARIÁVEIS EXTRAS
console.log((idade >= 16 && idade < 18) || (idade > 70));
