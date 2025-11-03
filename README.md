# Desafios Diários de Programação - freeCodeCamp

Este repositório serve como um arquivo pessoal das minhas soluções para os desafios diários de programação propostos pelo [freeCodeCamp](https://www.freecodecamp.org/learn/daily-coding-challenge/archive). O objetivo é praticar a resolução de problemas e a escrita de código limpo e testado.

## 🎯 Estrutura do Projeto

Cada desafio é organizado em uma estrutura de pastas que representa a data em que foi resolvido, seguindo o formato `AAAA/MM/DD`.

Dentro da pasta de cada dia, você encontrará:

- `script.js`: O arquivo contendo a implementação da solução para o desafio.
- `script.test.js`: O arquivo de testes unitários para validar a corretude da solução.

```
/
├── 2025/
│   ├── 10/
│   │   ├── 01/
│   │   │   ├── script.js
│   │   │   └── script.test.js
│   │   ├── 02/
│   │   │   ├── script.js
│   │   │   └── script.test.js
└── ...
```

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** JavaScript
- **Ambiente de Execução:** Node.js
- **Framework de Testes:** [Jest](https://jestjs.io/)

## 🚀 Como Começar

Para executar o projeto localmente e rodar os testes, siga os passos abaixo.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm (geralmente incluído no Node.js)

### Instalação

1.  Clone o repositório para a sua máquina local:
    ```bash
    git clone https://github.com/tetri/freeCodeCamp-Daily-Coding-Challenge.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd freeCodeCamp-Daily-Coding-Challenge
    ```
3.  Instale as dependências de desenvolvimento (apenas o Jest, neste caso):
    ```bash
    npm install
    ```

## ✅ Executando os Testes

Para verificar se todas as soluções estão funcionando conforme o esperado, execute o seguinte comando na raiz do projeto. O Jest irá descobrir e rodar todos os arquivos de teste (`*.test.js`).

```bash
npm test
```

## 🛡️ Segurança

A segurança é levada a sério. Para mais informações sobre como relatar uma vulnerabilidade, consulte o nosso arquivo [SECURITY.md](SECURITY.md).

## 📄 Licença

Este projeto está sob a licença UNLICENSE.
