# 🚀 Site Institucional Moderno – Fullstack, CI/CD, Testes, Deploy e IA

Este projeto é um **site institucional** completo, desenvolvido com as melhores práticas de desenvolvimento fullstack, automação, testes e integração de Inteligência Artificial. Ele demonstra como construir, testar e entregar uma aplicação moderna, robusta e escalável, pronta para produção.

---

## ✨ Funcionalidades

- **Frontend SPA** com React + Vite
- **Estilização moderna** com Tailwind CSS
- **Backend robusto** com Node.js + Express
- **Chat com Inteligência Artificial** integrado via API
- **Testes automatizados** (Vitest no frontend, Jest no backend)
- **CI/CD com GitHub Actions**: build, testes e deploy automáticos
- **Deploy profissional**: Vercel (frontend) e Render (backend)
- **Gerenciamento seguro de variáveis de ambiente**
- **Fallback de rotas SPA** para navegação fluida
- **Boas práticas de segurança e organização**

---

## 🏗️ Tecnologias Utilizadas

- **Frontend:**  
  - [React](https://react.dev/)
  - [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Vitest](https://vitest.dev/)

- **Backend:**  
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [Jest](https://jestjs.io/)
  - [dotenv](https://github.com/motdotla/dotenv)

- **CI/CD & Deploy:**  
  - [GitHub Actions](https://github.com/features/actions)
  - [Vercel](https://vercel.com/)
  - [Render](https://render.com/)

- **Outros:**  
  - Integração com IA via [OpenRouter](https://openrouter.ai/)

---

## ⚙️ Como rodar localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz do backend e defina as chaves necessárias (exemplo: `OPENROUTER_API_KEY`).
   - No frontend, use `.env` com a variável `VITE_API_URL` apontando para o backend.

3. **Instale as dependências:**
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

4. **Rode o backend:**
   ```bash
   cd backend
   npm run dev
   ```

5. **Rode o frontend:**
   ```bash
   cd ../frontend
   npm run dev
   ```

---

## 🧪 Testes

- **Backend:**  
  ```bash
  cd backend
  npm test
  ```
- **Frontend:**  
  ```bash
  cd frontend
  npm run test
  ```

---

## 🔄 CI/CD e Deploy

- **Pipelines automatizados** com GitHub Actions:  
  - Testes e build a cada push na branch `main`
  - Deploy automático:
    - **Render:** Backend
    - **Vercel:** Frontend

- **Deploy hooks** configurados via secrets no GitHub para máxima segurança.

---

## 🤖 Chat com IA

- O site possui um chat integrado com Inteligência Artificial, utilizando a API do OpenRouter.
- O backend serve como ponte para a IA, mantendo as chaves seguras e abstraindo a complexidade para o frontend.

---

## 📝 Desafios e Aprendizados

- Separação e automação dos testes de frontend e backend
- Deploy automático seguro e sem dependência de CLIs
- Gerenciamento de variáveis de ambiente para múltiplos ambientes
- Configuração de assets estáticos e fallback de rotas SPA
- Integração de chat com IA de forma transparente e segura
- Boas práticas de segurança, organização e escalabilidade

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 💡 Contato

Se quiser trocar ideias sobre CI/CD, automação, integração de IA, Tailwind ou qualquer etapa do ciclo de desenvolvimento, fique à vontade para entrar em contato!

- GitHub: [elton-peixoto-lu](https://github.com/elton-peixoto-lu)
- LinkedIn: [Elton Peixoto](https://www.linkedin.com/in/elton-peixoto-914452296/)
