import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import aHome from "../../../support/pageobjects/action/aHome";
import aMenu from "../../../support/pageobjects/action/aMenu";
import aCarrinho from "../../../support/pageobjects/action/aCarrinho";


Given("que eu estou no site QA Commerce", () => {
    aHome.acessarUrl()
})

When("insiro a quantidade {string}", (quantidade) => {
    aHome.informarQuantidadeProduto1(quantidade)
})


And("clico para adicionar no carrinho", () => {
    aHome.clicarEmAdicionarAoCarrrinho()
})

And("clico no carrinho", () => {
    aHome.clicoNoCarrinho()
})

Then("o sistema deve exibir a mensagem {string}", (mensagem) => {
    aHome.validarMensagemIncluidoComSucesso(mensagem)
})

Given("clico no menu Carrinho",() => {
    aMenu.clicarNoMenuCarrinho()
})

When("o sistema exibe o produto {string}", (produto) => {
    aCarrinho.validaDescricaoProduto(produto)
})

And("o sistema deve exibir a valor unitário de {string}", (valor) => {
    aCarrinho.validaValorUnitarioProduto(valor)
})

And("o sistema deve exibir a valor total de {string}", (valor) => {
    aCarrinho.validaValorTotalProduto(valor)
})

And("o sistema deve exibir a quantidade {string}", (quantidade) => {
    aCarrinho.validaQuantidade(quantidade)
})

