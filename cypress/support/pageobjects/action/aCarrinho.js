/// <reference types="cypress" />

import { eCarrinho } from "../elements/eCarrinho"


class carrinho {

    validaValorUnitarioProduto(valor) {
        cy.get(eCarrinho.labels.lblPreco).then($val => {
            let valorObtido = $val[0].innerText
            expect(valorObtido).to.eq(valor)
        })
    }

    validaValorTotalProduto(valor) {
        cy.get(eCarrinho.labels.lblTotal).then($val => {
            let valorObtido = $val[0].innerText
            expect(valorObtido).to.eq(valor)
        })
    }

    validaQuantidade(quantidade) {
        cy.get(eCarrinho.labels.lblQuantidade).then($val => {
            let valorObtido = $val[0].innerText
            expect(valorObtido).to.eq(quantidade)
        })
    }

    validaDescricaoProduto(produto) {
        cy.wait(2000)
        cy.get(eCarrinho.labels.lblDescricao).then($val => {
            let textoObtido = $val[0].innerText
            expect(textoObtido).to.eq(produto)
        })
    }

    validaValorTotalDosProdutos(valor){
         cy.wait(2000)
         cy.get(eCarrinho.labels.lblValorTotalDaCompra).then($val => {
            let textoObtido = $val[0].innerText
            expect(textoObtido).to.eq(valor)
        })
    }

    validaValorDoFrete(valor){
         cy.wait(2000)
         cy.get(eCarrinho.labels.lblValorDoFrete).then($val => {
            let textoObtido = $val[0].innerText
            expect(textoObtido).to.eq(valor)
        })
    }

    validaValorTotalComFrete(valor){
         cy.wait(2000)
         cy.get(eCarrinho.labels.lblTotalComFrete).then($val => {
            let textoObtido = $val[0].innerText
            expect(textoObtido).to.eq(valor)
        })
    }

    clicaIrParaCheckout(){
        cy.wait(2000)
        cy.get(eCarrinho.botoes.btnCheckout)
        .should('exist')
        .click()
    }
}
export default new carrinho