# 📊 Analisador de Números

> Projeto de estudo focado em **Lógica de Programação** e **Manipulação do DOM** com JavaScript Puro (Vanilla JS).

Este projeto é uma aplicação web interativa que permite ao usuário criar uma lista de números e gerar análises estatísticas automáticas sobre os dados inseridos. O objetivo principal foi consolidar conhecimentos sobre arrays, laços de repetição e interação com elementos HTML.

## 🚀 Tecnologias Utilizadas

- **HTML5** (Estrutura semântica)
- **CSS3** (Estilização com **Flexbox** para layout responsivo)
- **JavaScript** (Lógica de validação e manipulação de dados)

## ⚙️ Funcionalidades

- [x] **Adicionar Números:** Aceita valores entre 1 e 100.
- [x] **Validação de Entrada:**
    - Impede a inserção de números repetidos.
    - Bloqueia valores fora da faixa permitida ou campos vazios.
    - Feedback visual via `alert` para o usuário.
- [x] **Interatividade:**
    - Suporte à tecla **Enter** para adicionar números rapidamente.
    - Botão de "Limpar" para reiniciar a análise.
- [x] **Análise Estatística ("Mágica"):**
    - Quantidade total de números cadastrados.
    - Identificação do **Maior** e **Menor** valor.
    - **Soma** de todos os valores.
    - Cálculo da **Média** dos valores.

## 🧠 Aprendizados e Destaques do Código

Durante o desenvolvimento, foquei em resolver problemas lógicos sem depender de bibliotecas externas:

1. **Algoritmos de Busca:** Implementei a lógica para encontrar o maior e o menor número percorrendo o array manualmente com um laço `for`, para entender a fundo como os algoritmos de ordenação funcionam.
2. **Manipulação do DOM:** Criação dinâmica de elementos HTML (`document.createElement('option')`) para atualizar a lista visualmente sem recarregar a página.
3. **UX (Experiência do Usuário):** Uso de eventos de teclado (`keyup`) para melhorar a usabilidade e foco automático nos inputs após as ações.

## 📦 Como rodar o projeto

1. Clone este repositório.
2. Abra o arquivo `index.html` no seu navegador de preferência.
3. Comece a adicionar números e clique em "Mágica" para ver os resultados!

---
Desenvolvido por **Fabio** durante estudos de Frontend e JavaScript.
