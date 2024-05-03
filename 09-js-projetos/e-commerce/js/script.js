document.addEventListener("DOMContentLoaded", function () {

    // lista de produtos (recuperar de uma API)
    const produtos = [
        {id: 1, nome: "Smartphone", categoria: "eletronicos", preco: 1500},
        {id: 2, nome: "Notebook", categoria: "eletronicos", preco: 3000},
        {id: 3, nome: "Livro Javascript", categoria: "livros", preco: 100},
        {id: 4, nome: "Camiseta", categoria: "vestuario", preco: 50}
    ]

    // produtos[0] = {id: 1, nome: "Smartphone", categoria: "eletronicos", preco: 1500}
    // produtos[0].nome = "Smartphone"
    // produtos[0]["nome"] = "Smartphone"
    // produtos[0].categoria = "eletronicos"

    let carrinho = [];

    const filtroCategoria = document.getElementById("filtroCategoria");
    const listaProdutos = document.getElementById("listaProdutos");
    const totalCarrinho = document.getElementById("totalCarrinho");

    // FUNÇÃO PARA LISTAR TODOS OS PRODUTOS NA <ul>
    // cada produto será exibido em uma <li>
    function listarProdutos(categoria) {
        listaProdutos.innerHTML = "";
        
        // filtrando os PRODUTOS pela categoria e salvando em uma lista chamada filtro
        let filtro = produtos.filter(produto => categoria === "todos" ? true : produto.categoria == categoria);
        console.log(filtro);

        // percorrendo todos os produtos que estão filtrados
        // cada produto filtrado será exibido em uma <li>
        // esses produtos serão inseridos na ul#listaProdutos
        filtro.forEach(produto => {
            const liItem = document.createElement("li");
            liItem.textContent = `${produto.nome} - R$${produto.preco}`;

            // criar botão de adicionar ao carrinho
            const botaoAdicionar = document.createElement("button");
            botaoAdicionar.textContent = "Adicionar ao carrinho";

            // no momento que eu clicar no botão, chamo a função adicionarAoCarrinho() e passo o objeto como param.
            botaoAdicionar.onclick = function () { adicionarAoCarrinho(produto) }

            // adicionando botão dentro da <li>
            liItem.appendChild(botaoAdicionar);

            // adicionando li e botao na tela (na ul)
            listaProdutos.appendChild(liItem);

        });
    }

    // listarProdutos("eletronicos");

    // FUNÇÃO PARA DETECTAR O EVENTO DE TROCA NO SELECT NO HTML
    // QUANDO TROCA, ELE CHAMA A FUNÇÃO listarProdutos() e passa como parâmetro a própria categoria
    filtroCategoria.addEventListener("change", function () {
        listarProdutos(this.value);
    });


    // FUNÇÃO PARA ADICIONAR UM PRODUTO AO CARRINHO
    // adicionar ao carrinho, signfiica adicionar o objeto do produto ao array carrinho
    function adicionarAoCarrinho(produto) {
        carrinho.push(produto);
        // console.log(carrinho);
        calcularTotal();
    }

    // FUNÇÃO PARA CALCULAR O TOTAL E EXIBIR NA TELA O TOTAL NO CARRINHO
    function calcularTotal() {
        let listaPrecoProdutos = [];
        
        for (let produto of carrinho) {
            listaPrecoProdutos.push(produto.preco);
        }

        const total = listaPrecoProdutos.reduce((acumulador, preco) => acumulador + preco);
        console.log(total);
        totalCarrinho.textContent = `R$${total}`;
    }

    listarProdutos("todos");

});