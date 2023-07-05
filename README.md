# Desafio de programação: Tela de Login
> Esse desafio consiste em criar uma tela de login fictícia (sem conexão com o backend) com validações de credenciais para efetivação do login.

#### Nível: Iniciante

### Pré-requisitos
Para realizar esse desafio, você precisa ter conhecimentos básicos sobre:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML);
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS);
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/Javascript).

### Leia antes de começar a desenvolver ^^
- Clone esse repositório:
  ```
    git clone git@github.com:vanriwerson/desafio-tela-de-login.git
  ```

- Instale as dependências do projeto:
  ```
    npm install
  ```

- Rode os testes do desafio:
  ```
    npm test
  ```
Eles devem falhar!

### Dicas
Para visualizar em seu navegador as alterações feitas no arquivo `index.html` toda vez que ele for salvo, recomendo o uso da extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VSCode.

### Requisitos
1. Estruture seu formulário de login no arquivo `index.html`:
  - Seu formulário de login deve estar envolto pela tag “form”;

  - Crie um campo para a inserção do e-mail:
    - Esse campo deve ter o id "email";
    - Esse campo deve ter uma label com o texto “E-mail”;
    - Esse campo dever ser do tipo "email";

  - Crie um campo para a inserção da senha:
    - Esse campo deve ter o id "password";
    - Esse campo deve ter uma label com o texto “Senha”;
    - Esse campo dever ser do tipo "password";

  - Crie um botão para efetuar o login.
    - Esse botão deve ter o id "login";
    - Esse botão deve ter o texto “Entrar”;

2. Crie a função para validar o login no arquivo `script.js`:
  - Crie variáveis para recuperar os valores inseridos pelo usuário nos campos do formulário de login;
  - Verifique se o e-mail informado é o mesmo que está contido no objeto `validCredentials.js`;
  - Verifique se a senha informada é a mesma que está contida no objeto `validCredentials.js`;
  - Emita um `window.alert` com a mensagem “Login efetuado com sucesso” caso as credenciais fornecidas estejam corretas;
  - Emita um `window.alert` com a mensagem “E-mail ou senha inválidos” caso alguma das credenciais fornecidas esteja incorreta.
