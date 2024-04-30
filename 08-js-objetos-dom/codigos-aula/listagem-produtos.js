document.addEventListener("DOMContentLoaded", function () {

    // IMAGINA... QUE VOCÊ ESTÁ FAZENDO UMA REQUISIÇÃO À UMA API E RETORNA UMA LISTA DE PRODUTOS

    // LISTA DE OBJETOS
    // LISTA DE PRODUTOS
    // ARRAY DE PRODUTOS
    const produtos = [
        {nome: "Notebook Gamer", preco: 4500, categoria: "Eletrônicos"}, 
        {nome: "Smarphone XPTO", preco: 2500, categoria: "Celulares"},
        {nome: "Cafeteira Elétrica", preco: 200, categoria: "Eletrodomésticos"}
    ];

    console.log(produtos);
    console.log(produtos[0]);
    console.log(produtos[1]);
    console.log(produtos[2]);
    console.log(produtos.length);

    // DECLARANDO FUNÇÃO QUE IRÁ EXIBIR OS PRODUTOS
    function inserirProdutos() {
        let containerProdutos = document.getElementById("produtos");

        // PARA CADA PRODUTO.. QUERO CRIAR UMA DIV EEE DENTRO DESSA DIV QUERO COLOCAR:
        // >> h2, p de preço e p categoria

        produtos.forEach(produto => {
            // Criar um elemento <div> para cada produto
            let produtoDiv = document.createElement("div");

            // adicionando informações na div de produto!
            produtoDiv.innerHTML = `<h3>${produto.nome}</h3>
                                    <p>Preço: R$ ${produto.preco}</p>
                                    <p>Categoria: ${produto.categoria}</p>`;
            
            // inserir a div do produto no container de produtos
            containerProdutos.appendChild(produtoDiv);
        });

    }

    // CHAMADA DA FUNÇÃO QUE EXIBE OS PRODUTOS
    inserirProdutos();

});