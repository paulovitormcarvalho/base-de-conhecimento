📚 BASE DE CONHECIMENTO: GUIA DE LINGUAGENS DE PROGRAMAÇÃO
======================================================

Um guia rápido e pesquisável sobre as principais linguagens de programação, desenvolvido durante a 10ª Edição da Imersão Dev com Google Gemini.

------------------------------------------------------
✨ SOBRE O PROJETO
------------------------------------------------------

Este projeto é uma **Base de Conhecimento interativa** que permite ao usuário pesquisar e visualizar informações essenciais sobre diversas linguagens de programação. Ele foi criado com foco em ser um recurso rápido e acessível para quem deseja entender as características, criadores e o ano de origem das linguagens mais importantes do mundo da tecnologia.

### Funcionalidades

* Pesquisa Dinâmica: Busca instantânea por nome da linguagem ou por termos contidos na descrição, usando JavaScript.
* Visualização em Cards: Informações organizadas em um layout responsivo em formato de cards.
* Fonte de Dados Externa: Os dados são carregados de um arquivo **data.json**, facilitando a adição de novas linguagens.
* Design Moderno: Interface com tema escuro (Dark Mode) utilizando variáveis CSS para fácil manutenção.

------------------------------------------------------
💻 TECNOLOGIAS UTILIZADAS
------------------------------------------------------

O projeto é uma aplicação de front-end puro, utilizando as seguintes tecnologias:

* **HTML5:** Estrutura semântica da página.
* **CSS3:** Estilização (com foco em Dark Mode e responsividade).
* **JavaScript (ES6+):** Manipulação do DOM, carregamento de dados via fetch() e lógica de busca (filtro).
* **JSON:** Armazenamento e fornecimento dos dados estruturados sobre as linguagens.

------------------------------------------------------
⚙️ COMO RODAR O PROJETO LOCALMENTE
------------------------------------------------------

Siga os passos abaixo para ter uma cópia local do projeto em execução:

### Pré-requisitos

Você precisará de um navegador web e um servidor local simples para carregar o arquivo data.json corretamente (o VS Code com a extensão Live Server é a opção mais fácil).

### Instalação

1. **Clone o repositório** (se estiver hospedado no Git):
   $ git clone https://github.com/paulovitormcarvalho/base-de-conhecimento
   $ cd base-de-conhecimento

2. **Baixe os arquivos:** Baixe os arquivos index.html, style.css, script.js e data.json para uma pasta local.

3. **Execute o servidor local:**
   * Se estiver usando o Live Server no VS Code, abra o index.html e clique em "Go Live".
   * Se estiver usando Python:
     $ python3 -m http.server

4. **Acesse a aplicação:** Abra seu navegador e navegue para o endereço do servidor local (ex: http://127.0.0.1:5500/).

------------------------------------------------------
🛠️ ESTRUTURA DO CÓDIGO
------------------------------------------------------

O projeto está dividido em quatro arquivos principais:

* **index.html:** Estrutura da página.
* **style.css:** Estilização e tema.
* **script.js:** Lógica da aplicação e filtro de dados.
* **data.json:** Dados das linguagens.

### Trecho de Destaque (JavaScript)

A função principal de filtro:

```javascript
function filtrarDados() {
    const termoBuscado = searchInput.value.toLowerCase();

    const dadosFiltrados = dados.filter(dado => {
        const nome = dado.nome.toLowerCase();
        const descricao = (dado.descricao || dado.Descricao || "").toLowerCase();

        return nome.includes(termoBuscado) || descricao.includes(termoBuscado);
    });

    renderizarCards(dadosFiltrados);
}
