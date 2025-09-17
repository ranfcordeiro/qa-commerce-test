import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import aHome from "../../../support/pageobjects/action/aHome";
import aMenu from "../../../support/pageobjects/action/aMenu";
import aCarrinho from "../../../support/pageobjects/action/aCarrinho";
import aCheckout from "../../../support/pageobjects/action/aCheckout";


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

When("verifico total de produtos {string}", (valor) => {
    aCarrinho.validaValorTotalDosProdutos(valor)
})

And("verifico o valor do frete {string}", (valor) => {
    aCarrinho.validaValorDoFrete(valor)
})

And("verifico o valor total com frete {string}", (valor) => {
    aCarrinho.validaValorTotalComFrete(valor)
})

Then("clico em Ir Para o Checkout",()=>{
    aCarrinho.clicaIrParaCheckout()
})

When("preencho o nome {string}", (nome) =>{
    aCheckout.preencherNome(nome)
})

And("preencho o sobrenome {string}", (sobrenome) =>{
    aCheckout.preencherSobrenome(sobrenome)
})

And("preencho o endereço {string}", (endereco) =>{
    aCheckout.preencherEndereco(endereco)
})

And("preencho o número {string}", (numero) =>{
    aCheckout.preencherNumero(numero)
})

And("preencho o CEP {string}", (cep) =>{
    aCheckout.preencherCep(cep)
})

And("preencho o telefone {string}", (tel) =>{
    aCheckout.preencherTelefone(tel)
})

And("preencho o email {string}", (email) =>{
    aCheckout.preencherEmail(email)
})

And("escolho a forma de pagamento Pix", () =>{
    aCheckout.selecionarFormaDePagamentoPix()
})

And("marco que li os termos e condições", () =>{
    aCheckout.marcarLiConcordoComTermos()
})

And("clico em Finalizar Pedido", () =>{
    aCheckout.clicarEmFinalizarPedido()
})

Then("o sistema exibe a mensagem {string}", (mensagem) =>{
    aCheckout.validarMensagem(mensagem)
})

