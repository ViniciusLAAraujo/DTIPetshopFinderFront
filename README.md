# Frontend desafio Petshop DTI 

<p align="center">
  <img src="https://github.com/ViniciusLAAraujo/DTIPetshopFinder/assets/90988825/c6d3a421-a13f-48ae-a014-d75f883d5ce2" alt="logo" width="250" height="250">
</p>

## Tabela de Conteudos

- [Frontend desafio Petshop DTI](#frontend-desafio-petshop-dti)
- [Instruções para Executar o Sistema](#instruções-para-executar-o-sistema)
- [Premissas Assumidas](#premissas-assumidas)
- [Decisões de Projeto](#decisões-de-projeto)
- [Descrição do Problema](#descrição-do-problema)
- [Como Usar o Sistema](#como-usar-o-sistema)
- [Logo](#logo)

## Instruções para Executar o Sistema

Para executar o projeto, é essencial garantir que o Node.js esteja instalado em seu sistema.

1. Certifique-se de que o backend do projeto (Spring) esteja em execução e acessível no endereço `http://localhost:8080`. Ou altere para o endereço correto em `{root}/petshop-dti\src\api\axiosConfig.js` a String **baseURL**.

2. Abra um terminal na pasta raiz do projeto .

3. Execute os seguintes comandos para iniciar o aplicativo React:

```bash
npm install # Para instalar as dependências do projeto 
npm start   # Para iniciar 
```
4. O aplicativo React será iniciado e estará disponível em `http://localhost:3000` no seu navegador padrão.

## Premissas Assumidas

- Apenas um usuario
- Sem necessidade de autenticação
- Distancia fixa entre o canil e petshops
- Apenas petshops em um mesmo TimeZone (sem a necessidade de verificar se finais de semana são diferentes entre as duas localidades. Isso também assume que o banco esta na mesma localidade)


## Decisões de Projeto

- React como blibloteca principal.
- As rotas são gerenciadas usando o React Router.
- A interface do usuário é estilizada com o uso do Bootstrap. Isso agiliza na construção de um design responsivo. Do modo que foi aplicado não sendo necessario redimencionar conteudos utilizando css media queries
- A comunicação com o backend é realizada através de requisições XMLHttpRequest usando a biblioteca Axios.

### Descrição do Problema

O projeto tem como objetivo encontrar o melhor petshop dentre um conjunto de petshops, considerando diferentes preços para cães pequenos e grandes, que variam de acordo com os dias da semana. A proximidade do petshop em relação ao canil também é considerada em caso de empate nos preços.

### Como Usar o Sistema

1. Navegue para a página inicial clicando em "PetshopDTI" ou na logo no menu de navegação. Nela se encontra uma descrição do problema.

2. Na página "Melhor Petshop" `/best-petshop`, você pode inserir a data do banho, a quantidade de cães pequenos e a quantidade de cães grandes.

3. Clique no botão "Encontrar" para descobrir qual petshop oferece o melhor preço com base na proximidade e custo.

4. O resultado será exibido na página, incluindo o nome do melhor petshop, distância em quilômetros, custo total e custos separados para cães pequenos e grandes.

5. A lista de petshops e preços pode ser visualizada na pagina "Lista de Petshops" `/all-petshops`.

### Logo

- A logo do site foi criada a partir do Bing Image Creator disponivel em : https://www.bing.com/create