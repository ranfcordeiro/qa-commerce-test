import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import api from "../../../support/api/adicionarProdutoAoCarrinho";


Given("que estou com o usuário {string}, executo a api de inclusão do produto {string} com a quantidade {string}", (idUsuario,idProduto,quantidade) => {
  cy.request(
    api.adicionarProdutoAoCarrinho(idUsuario,idProduto,quantidade)
  ).then(resp => {
    expect(resp.status).to.eq(200)
    expect(resp.statusText).to.eq("OK")
  })
 
})

Given("que acesso a api de listagem de usuários", (idUsuario,idProduto,quantidade) => {
  cy.request(
    api.listarUsuarios()
  ).then(resp => {debugger
    expect(resp.status).to.eq(200)
    expect(resp.statusText).to.eq("OK")
  })
 
})

