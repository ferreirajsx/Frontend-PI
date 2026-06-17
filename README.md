# BUCK - Sistema de Gestão de Atividades Complementares

## 📋 Sobre o Projeto

Aplicação web do BUCK desenvolvida para facilitar o gerenciamento de atividades acadêmicas complementares em instituições de ensino.

A plataforma permite que alunos enviem solicitações de atividades, enquanto coordenadores e administradores realizam o acompanhamento, análise e gerenciamento das informações.

## 🚀 Funcionalidades

### 👨‍🎓 Área do Aluno

* Visualização do progresso das atividades complementares.
* Envio de solicitações de atividades.
* Acompanhamento do status das solicitações.
* Consulta de histórico de atividades.

### 👨‍🏫 Coordenação

* Dashboard com métricas do sistema.
* Aprovação ou rejeição de solicitações.
* Gerenciamento de alunos.
* Gerenciamento de cursos.
* Consulta de relatórios e registros.

### 👨‍💼 Administração

* Controle geral do sistema.
* Gerenciamento de usuários.
* Cadastro de coordenadores.
* Configuração e manutenção dos dados.

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Progressive Web App (PWA)
* Service Workers
* API REST

## 📂 Estrutura do Projeto

```text
Frontend-PI-main/
│
├── index.html
├── area-aluno.html
├── teladelogin.html
├── dashbord.html
├── alunos.html
├── cursos.html
├── solicitacoes.html
├── administracao.html
│
├── api.js
├── script.js
├── style.css
├── global.css
│
├── manifest.json
├── sw.js
│
└── icons/
    ├── icon-128.png
    └── icon-512.png
```

## 🔗 Integração com Backend

O frontend está configurado para consumir a API:

```javascript
https://backend-pi-zzw9.onrender.com/api
```

### Principais Endpoints Consumidos

#### Autenticação

* POST `/auth/login`

#### Dashboard

* GET `/dashboard`
* GET `/dashboard/logs`

#### Alunos

* GET `/alunos`
* POST `/alunos`
* PUT `/alunos/{id}`
* DELETE `/alunos/{id}`

#### Cursos

* GET `/cursos`
* POST `/cursos`
* PUT `/cursos/{id}`
* DELETE `/cursos/{id}`

#### Solicitações

* GET `/solicitacoes`
* POST `/solicitacoes`
* PUT `/solicitacoes/{id}/aprovar`
* PUT `/solicitacoes/{id}/rejeitar`

## 📱 PWA (Progressive Web App)

O sistema possui suporte a instalação como aplicativo por meio de:

* Manifesto Web (`manifest.json`)
* Service Worker (`sw.js`)
* Ícones personalizados
* Funcionamento otimizado para dispositivos móveis

## ▶️ Como Executar

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
```

### 2. Acesse a pasta do projeto

```bash
cd Frontend-PI-main
```

### 3. Execute um servidor local

Exemplo utilizando VS Code com a extensão Live Server:

```bash
Clique com o botão direito em index.html
→ Open with Live Server
```

Ou utilizando Python:

```bash
python -m http.server 5500
```

### 4. Acesse no navegador

```text
http://localhost:5500
```

## 👥 Perfis do Sistema

| Perfil        | Responsabilidades                         |
| ------------- | ----------------------------------------- |
| Aluno         | Enviar e acompanhar atividades            |
| Coordenador   | Aprovar, rejeitar e gerenciar atividades  |
| Administrador | Gerenciar usuários e configurações gerais |

## 🎯 Objetivo

Automatizar o controle das atividades complementares, reduzindo processos manuais e proporcionando maior eficiência para alunos, coordenadores e administradores.

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos como parte do Projeto Integrador (PI).
