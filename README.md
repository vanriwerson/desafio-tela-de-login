# Desafio de programação: Tela de Login
> Esse desafio consiste em criar uma tela de login fictícia (sem conexão com o backend) com validações de credenciais para efetivação do login.

##### Nível: Iniciante

### Pré-requisitos
Para realizar esse desafio, você precisa ter conhecimentos básicos sobre

- [HTML]();
- [CSS]();
- [Javascript]()

### Requisitos
1. Estruture seu formulário de login no arquivo `index.html`:

- Seu formulário de login deve estar envolto na tag “form”;
- Crie um campo com a label “E-mail”;
- Crie um campo com a label “Senha”;
- Crie um botão com o texto “Entrar”.

2. Crie a função para validar o login no arquivo `script.js`:
- Recupere os valores inseridos nos campos do formulário de login;
- Verifique se o e-mail informado é o mesmo que está contido no arquivo `validCredentials.js`;
- Verifique se a senha informada é a mesma que está contida no arquivo `validCredentials.js`;
- Emita um `window.alert` com a mensagem “Login efetuado com sucesso” caso as credenciais fornecidas estejam corretas;
- Emita um `window.alert` com a mensagem “E-mail ou senha inválidos” caso alguma das credenciais fornecidas esteja incorreta.
