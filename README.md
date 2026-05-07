# Frontend — Atividades Complementares

Interface web para o sistema de controle de atividades complementares, desenvolvida em **HTML**, **CSS** e **JavaScript puro**.  
Deploy em produção: [https://frontendpii.vercel.app](https://frontendpii.vercel.app)  
Repositório do backend: [https://github.com/ferreirajsx/backend-PI](https://github.com/ferreirajsx/backend-PI)

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização (global.css + style.css) |
| JavaScript (ES6+) | Lógica e consumo da API |
| PWA (Service Worker) | Cache offline e instalação como app |
| Vercel | Hospedagem do frontend |

---

## 📁 Estrutura do Projeto

```
frontend-PI/
├── icons/
│   ├── icon-128.png     # Ícone PWA 128x128
│   └── icon-512.png     # Ícone PWA 512x512
├── administracao.html   # Painel admin: cadastro de coordenadores
├── alunos.html          # Cadastro e listagem de alunos
├── area-aluno.html      # Área do aluno: submeter e acompanhar atividades
├── cursos.html          # Gerenciamento de cursos
├── dashbord.html        # Dashboard do coordenador com métricas
├── index.html           # Página inicial (seleção de perfil)
├── solicitacoes.html    # Listagem e avaliação de solicitações
├── teladelogin.html     # Tela de login do coordenador
├── api.js               # Centraliza todas as chamadas à API REST
├── script.js            # Scripts globais
├── global.css           # Estilos globais compartilhados
├── style.css            # Estilos específicos
├── manifest.json        # Configuração do PWA
├── sw.js                # Service Worker (cache v3)
└── settings.json        # Configurações do VS Code
```

---

## 🔗 Conexão com o Backend

Todas as chamadas à API são centralizadas no arquivo `api.js`. A URL base aponta para o backend no Render:

```js
const API_URL = 'https://backend-pi-zzw9.onrender.com/api';
```

Para rodar localmente apontando para um backend local, troque temporariamente para:

```js
const API_URL = 'http://localhost:3000/api';
```

---

## 📄 Páginas e Funcionalidades

### `index.html` — Página Inicial
Ponto de entrada do sistema. Permite escolher entre acesso como **Aluno** ou **Coordenador**.

### `teladelogin.html` — Login do Coordenador
Formulário de login com e-mail e senha. Redireciona para o dashboard após autenticação.

### `dashbord.html` — Dashboard do Coordenador
Exibe métricas do sistema:
- Total de solicitações pendentes
- Total de alunos cadastrados
- Cursos ativos
- Taxa de aprovação

### `solicitacoes.html` — Solicitações de Atividades
Lista todas as solicitações com filtro por status (pendente, aprovado, rejeitado). Permite aprovar ou rejeitar com observação.

### `alunos.html` — Cadastro de Alunos
Formulário de cadastro com os campos: nome, e-mail, matrícula, curso e senha. Lista todos os alunos cadastrados com opções de editar e excluir.

### `cursos.html` — Gerenciamento de Cursos
Criação e edição de cursos com nome e meta de horas.

### `administracao.html` — Painel Administrativo
Cadastro de coordenadores com vínculo a um curso. Acesso rápido às demais seções.

### `area-aluno.html` — Área do Aluno
O aluno seleciona seu nome, clica em **Carregar** e pode submeter novas atividades complementares informando título, carga horária, categoria e descrição. Também exibe o histórico de atividades enviadas com status.

---

## ⚙️ Como Rodar Localmente

O frontend é HTML puro — não precisa de `npm install` nem build.

1. Clone o repositório:
```bash
git clone https://github.com/ferreirajsx/Frontend-PI.git
cd Frontend-PI
```

2. Instale a extensão **Live Server** no VS Code

3. Troque a URL no `api.js` para apontar para o backend local:
```js
const API_URL = 'http://localhost:3000/api';
```

4. Clique com o botão direito no `index.html` → **Open with Live Server**

> Certifique-se de que o backend está rodando localmente (`npm run dev` na pasta do backend) antes de testar.

---

## 🚀 Deploy no Vercel

O deploy é automático via GitHub. A cada push na branch `main`, o Vercel faz o redeploy automaticamente.

Para fazer deploy manualmente:
1. Faça push para o repositório:
```bash
git add .
git commit -m "sua mensagem"
git push
```
2. O Vercel detecta o push e publica em [https://frontendpii.vercel.app](https://frontendpii.vercel.app)

---

## 📱 PWA — Progressive Web App

O sistema pode ser instalado como aplicativo no celular ou desktop.

O Service Worker (`sw.js`) faz cache dos arquivos estáticos para funcionamento offline. A versão atual do cache é `ativcomp-v3`.

Arquivos em cache:
- Todas as páginas HTML
- CSS e JS
- Ícones

> Chamadas à API nunca são cacheadas — sempre vão direto para a rede.

---

## ⚠️ Observações Importantes

- O campo `idCurso` retornado pela API é um objeto populado (`{ _id, nome }`). O frontend extrai o `_id` corretamente antes de enviar requisições.
- Todos os IDs usados nas requisições são **ObjectIds do MongoDB** (strings de 24 caracteres hex).
- Usuários cadastrados antes da implementação do bcrypt no backend precisam ser recadastrados.
- O botão **Carregar** na área do aluno deve ser clicado antes de submeter uma atividade — ele carrega o `idCurso` do aluno selecionado.
