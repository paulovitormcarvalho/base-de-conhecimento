🌐 BASE DE CONHECIMENTO DE APIS PÚBLICAS: CATÁLOGO INTERATIVO
======================================================

Este é um Catálogo Interativo de APIs Públicas desenvolvido em HTML, CSS e JavaScript puro, focando na busca, filtragem e visualização de endpoints de dados para desenvolvedores.

------------------------------------------------------
✨ FUNCIONALIDADES EM DESTAQUE
------------------------------------------------------

1.  Troca de Tema (Dark/Light Mode):
    * Usa Variáveis CSS e 'localStorage' para persistir a preferência do tema do usuário.
2.  Pesquisa Dinâmica:
    * Filtra a lista de APIs em tempo real por nome ou descrição.
3.  Visualização em Cards:
    * Layout em CSS Grid responsivo, apresentando o logo da API (via link_imagem) e informações essenciais.
4.  Consumo de Dados (Fetch API):
    * Carregamento assíncrono dos dados do arquivo JSON local.

------------------------------------------------------
💻 TECNOLOGIAS UTILIZADAS
------------------------------------------------------

* **HTML5:** Estrutura da página, incluindo a barra de busca e o Theme Toggle.
* **CSS3:** Estilização avançada com **Variáveis CSS** (:root, body.light-mode) para o sistema de tema. Layout em Grid.
* **JavaScript (ES6+):** Lógica de busca, Fetch API, renderização do DOM e controle do 'theme-switcher' com persistência em 'localStorage'.
* **JSON:** Fonte de dados estruturada para o catálogo de APIs.

------------------------------------------------------
⚙️ ESTRUTURA DE DADOS (data.json)
------------------------------------------------------

O arquivo JSON contém campos detalhados, incluindo o link para a imagem:

Exemplo de campos:
* "nome": "GitHub API"
* "descricao": "Permite interagir com repositórios, usuários, pull requests..."
* "data_criacao": "2008"
* "link": "https://docs.github.com/en/rest"
* "link_imagem": "URL do logo da API"

------------------------------------------------------
🚀 COMO RODAR O PROJETO LOCALMENTE
------------------------------------------------------

Para garantir o funcionamento correto (evitar erros de CORS ao carregar o JSON), é necessário utilizar um servidor web local.

### 1. Pré-requisitos
* Navegador web moderno.
* Servidor HTTP local (Ex: Live Server do VS Code ou um servidor Python simples).

### 2. Passos para Execução

1.  **Baixe os Arquivos:** Salve 'index.html', 'style.css', 'script.js' e 'data.json' em uma pasta.
2.  **Inicie o Servidor:** Use a função "Open with Live Server" no VS Code ou inicie o servidor Python no terminal:
    $ python3 -m http.server
3.  **Acesse:** Navegue até o endereço do servidor local (ex: http://127.0.0.1:5500/).

------------------------------------------------------
💡 DETALHES DA IMPLEMENTAÇÃO (JAVASCRIPT)
------------------------------------------------------

### Lógica de Filtragem (Pesquisa Dinâmica)

A função de filtro monitora a entrada do usuário e busca correspondências no nome OU na descrição da API:

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
```
👨‍💻 AUTOR <br>
Desenvolvido por Paulo Vitor durante a 10ª Edição da Imersão Dev com Google Gemini. <br>
[Meu Linkedin](https://www.linkedin.com/in/paulovitormcarvalho/)
