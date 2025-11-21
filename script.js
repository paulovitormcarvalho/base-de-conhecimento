let cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

let dados = []

async function iniciarBusca() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

function filtrarDados() {
    const termoBuscado = searchInput.value.toLowerCase();

    const dadosFiltrados = dados.filter(dado => {
        const nome = dado.nome.toLowerCase();
        // Garante que a busca funcione para "descricao" e "Descricao"
        const descricao = (dado.descricao || dado.Descricao || "").toLowerCase();

        return nome.includes(termoBuscado) || descricao.includes(termoBuscado);
    });

    renderizarCards(dadosFiltrados);
}

searchInput.addEventListener("input", filtrarDados);

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>Ano de criação: ${dado.ano}</p>
            <p> Criado por: ${dado.criador}</p>
            <p>${dado.descricao || dado.Descricao}</p>
            <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Saiba mais</a>
        `;
        cardContainer.appendChild(article);
    }
}

iniciarBusca();