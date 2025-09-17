O projeto está separado em:<br>
<br>
support/pageobjects/action: Executa as ações de interação com a objetos da página<br>
support/pageobjects/elements: Mapeia os objetos da página<br>
step_definition: contém pastas que vinculam as ações com o bdd<br>
step_definition/*.feature: Cenários em bdd<br>
<br>
Para Executar os testes informados será necessário:<br>
1- Baixar e executar o Visual Code Community<br>
2- Clonar o repositorio do github:  https://github.com/ranfcordeiro/qa-commerce-test<br>
3- Abrir o terminal dentro do Visual Code<br>
4- Executar o comando: npm install cypress --save-dev (instalar cypress)<br>
5- Executar o comando: npm install -D cypress-xpath (instalar xpath)<br>
6- Executar o comando: npm install cypress-cucumber-preprocessor --save-dev (instalar cucumber)<br>
7- Abrir o projeto no qa-commerce-test no Visual Code<br>
8- Executar o comando no terminal: npm test (execução assistida) ou npm run runtest (execução não assistida)<br>
9- Selecionar E2E (assistida)<br>
10-Executar o teste desejado clicando sobre a feature (assistida)<br>
<br>


