# <img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright Logo" width="40" /> api-playwright-tests

Repositório com testes automatizados de **API** usando o [Playwright](https://playwright.dev/), integrados ao plugin [`pw-api-plugin`](https://www.npmjs.com/package/pw-api-plugin). O plugin permite visualizar detalhes de cada requisição HTTP diretamente na **interface do Playwright UI** e nos **relatórios de execução**

---

## 🔧 Tecnologias & Ferramentas

- 🎭 **Playwright** — framework para automação moderna
- 🔌 **pw-api-plugin** — exibe chamadas HTTP no Playwright UI
- 🧪 **GitHub Actions** — integração contínua (CI)
- 💻 **Node.js** — ambiente de execução JavaScript

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/ciboto/api-playwright-tests.git
cd api-playwright-tests
npm install
```
---
## Como Executar os Testes
1. Executar testes via CLI:
```
npx playwright test
```

2. Abrir Report da execução local:
```
npx playwright show-report
```

---
## 📊 Relatórios com pw-api-plugin

Com o pw-api-plugin, o relatório do Playwright mostra:
	•	Detalhes das chamadas HTTP feitas nos testes
	•	Payload de requisição e resposta
	•	Códigos de status, tempo de resposta e cabeçalhos
	•	Visualização embutida no Playwright UI

⸻

## ⚙️ Integração com GitHub Actions

Este repositório usa GitHub Actions para executar os testes automaticamente a cada push ou pull request.

## 📁 Exemplo de workflow (.github/workflows/playwright.yml):
```

```

 
## Visualizar relatório HTML de pw-api-plugin
Acesse [📊 Relatório Executado](https://ciboto.github.io/api-playwright-tests/)
