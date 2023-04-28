## Sistema de Autenticação e Alteração de Tema

Este é um sistema de autenticação desenvolvido em React.js que permite aos usuário autenticar-se e alternar entre os temas claro (light) e escuro (dark).

### Funcionalidades

- Autenticação de usuário com e-mail e senha
- Mudança de tema de claro para escuro e vice-versa
- Armazenamento do tema selecionado em Local Storage
- Autenticação da página inicial para usuários autenticados

### Instalação

Para executar o projeto em sua máquina local utlizando o yarn, siga os seguintes passos:

```bash

# Clone o repositório para sua máquina local:
$ git clone https://github.com/seu-usuario/sistema-de-autenticacao-e-mudancas-de-tema.git

# Instale as dependências do projeto:
$ yarn install

Inicie o servidor de desenvolvimento:
$ yarn dev

Acesse o sistema em seu navegador:

http://127.0.0.1:5173/

```

Para executar o projeto em sua máquina local utlizando o npm, siga os seguintes passos:

```bash

# Clone o repositório para sua máquina local:
$ git clone https://github.com/seu-usuario/sistema-de-autenticacao-e-mudancas-de-tema.git

# Instale as dependências do projeto:
$ npm install

Inicie o servidor de desenvolvimento:
$ npm run dev

Acesse o sistema em seu navegador:

http://127.0.0.1:5173/

```

### Uso

O sistema de autenticação e alteração de tema é simples de usar. Na página de login, você pode se autenticar com as credenciais localizadas no site https://reqres.in na sessão "LOGIN - SUCCESSFUL" ou simular um erro na sessão "LOGIN - UNSUCCESSFUL"

Após autenticado, você poderá acessar a página inicial que está protegida

Você também pode mudar o tema do sistema clicando no botão no canto superior direito da página. O tema selecionado será armazenado em Local Storage e será carregado automaticamente na próxima vez que você acessar o sistema.