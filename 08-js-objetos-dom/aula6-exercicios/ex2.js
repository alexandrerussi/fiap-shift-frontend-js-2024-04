// Faça um programa que tenha um método chamado calcularArea(), que receba as dimensões 
// de um terreno retangular como argumento (largura e comprimento) e mostre a área do terreno 
// na tela.

// AO DOM SER CARREGADO... EU COMEÇO A LER O CÓDIGO JS

document.addEventListener("DOMContentLoaded", function () {

    function calculateArea(width, length) {
        let area = width * length;
        return area;
    }

    const btnCalcular = document.getElementById("calcular-area");
    
    btnCalcular.addEventListener("click", function() {
        // como estou selecionando informações do input, tenho que considerar o seguinte:
        /* 
            1. para recuperar o valor do campo, tem de colocar .value
            2. sempre o input irá retornar um dado string, logo converta para numero neste caso
        */
        let largura = +document.getElementById("input-largura").value;
        let comprimento = +document.getElementById("input-comprimento").value;

        let areaTerreno = calculateArea(largura, comprimento);
        
        let resultado = document.getElementById("resultado-area");
        resultado.innerHTML = `A área total do terreno é: ${areaTerreno} m²`;
    });

});