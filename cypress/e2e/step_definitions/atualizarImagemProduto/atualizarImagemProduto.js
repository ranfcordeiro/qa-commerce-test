import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given("executo API com usuário {string} para alterar imagem para {string} e cor para {string}", (idUsuario,imagem,cor) => {
  cy.request({
    method: 'PUT',
    url: "https://www.advantageonlineshopping.com/catalog/api/v1/product/image/"+idUsuario+"/"+imagem+"/"+cor+"",
    failOnStatusCode: false,
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(resp => {
    expect(resp.status).to.eq(200)
  })
 
})
