import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import wsProductSearch from "../../../support/api/wsProductSearch";


Given("executo a api para pesquisar o produto {string}, o sistema encontra {string}", (produto,modelo) => {
  
  wsProductSearch.productSearch(produto,modelo)
 
})

