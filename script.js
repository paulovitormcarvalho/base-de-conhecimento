let cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");
const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;

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
            <img src="${dado.link_imagem}" alt="${dado.nome}" />
            <p>Ano de criação: ${dado.data_criacao}</p>
            <p>Criador: ${dado.criador}</p>
            <p>Sobre: ${dado.descricao || dado.Descricao}</p>
            <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Saiba mais</a>
        `;
        cardContainer.appendChild(article);
    }
}

// --- Theme Switcher Logic ---
function aplicarTema(tema) {
    if (tema === 'light') {
        body.classList.add("light-mode");
        themeToggle.checked = true;
    } else {
        body.classList.remove("light-mode");
        themeToggle.checked = false;
    }
}

themeToggle.addEventListener("change", () => {
    const isLightMode = themeToggle.checked;
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    aplicarTema(isLightMode ? 'light' : 'dark');
});

iniciarBusca();
// Aplica o tema salvo no localStorage assim que o script é carregado.
aplicarTema(localStorage.getItem('theme'));