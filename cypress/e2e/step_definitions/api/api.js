import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import adicionarProdutoAoCarrinho from "../../../support/api/adicionarProdutoAoCarrinho";


Given("que estou com o usuário {string}, executo a api de inclusão do produto {string} com a quantidade {string}", (idUsuario,idProduto,quantidade) => {
  cy.request(
    adicionarProdutoAoCarrinho.adicionarProdutoAoCarrinho(idUsuario,idProduto,quantidade)
  ).then(resp => {debugger
    expect(resp.status).to.eq(200)
    expect(resp.statusText).to.eq("OK")
  })
 
})
