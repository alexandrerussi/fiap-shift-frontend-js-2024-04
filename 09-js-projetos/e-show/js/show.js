// pegar o tbody para apresentar as infos do show na tela
const tbody = document.querySelector("tbody");

// array para os cards (info. de cada card)
const card = [];

// array para lista que SUPOSTAMENTE será enviada para uma API
let apiReturn = [];

// pegar o form - atribuir o "escutadador" para o evento de submit
// escutar o evento de submit
// cancelar esse evento de atualizar a tela
// cria essa função que apresenta as informações na tela de acordo com oq foi inserido

document.querySelector("form").addEventListener("submit", function(e) {
    // cancelar evento
    e.preventDefault();
    
    // recuperar todos os campos (inputs)
    // ARRAY DE CAMPOS (INPUT)
    const campos = [
        document.querySelector('#artista'),
        document.querySelector('#dataShow'),
        document.querySelector('#cidade'),
        document.querySelector('#localShow'),
        document.querySelector('#mediaIngresso'),
        document.querySelector('#banner')
    ];

    // Criar uma <tr> para escrever no tbody e inserir informações em cada <td> dentro dessa <tr>
    const tr = document.createElement("tr");

    // vamos montar um forEach para percorrer o array de cada input/ocorrência, criar uma td e vincular à tr
    campos.forEach((campo) => {
        
        // criar uma td
        const td = document.createElement("td");

        if (campo.type == "file") {
            
            let src = String(campo.value); // C:\fakepath\pexels-caleb-oquendo-3018083.jpg
            src = src.replace("C:\\fakepath\\", "./images/") // ./images/pexels-caleb-oquendo-3018083.jpg
            td.innerHTML = `<img src="${src}" width="200" height="auto">`;
            card.push(src);

        } else {

            // inserir conteúdo do campo na td
            td.textContent = campo.value;
            card.push(campo.value);

        }

        // vinculando a td na tr
        tr.appendChild(td);

    });

    // vincular a tr criada com todas as td's no tbody
    tbody.appendChild(tr);

    // limpar os dados digitados
    this.reset();

    
    // criar os cards!!
    let divCards = document.querySelector(".cards-shows");
    divCards.innerHTML += `
        <div class="col-md-3 my-3">
            <div class="card" style="width: 18rem;">
                <img src="${card[5]}" alt="show">
                <div class="card-body">
                    <h2 class="card-title display-6">${card[0]}</h2>
                    <p class="card-text lead">Data: ${card[1]}</p>
                    <a href="#" class="btn btn-danger">Comprar ingresso</a>
                </div>
            </div>
        </div> 
    `;

    // console.table(card);

    // SIMULAÇÃO DE ESTRUTURAÇÃO DE DADOS PARA ENVIAR VIA API
    apiReturn.push({...card});
    console.log(apiReturn);

    // zerando o card para o próximo show
    card.splice(0);

    
});