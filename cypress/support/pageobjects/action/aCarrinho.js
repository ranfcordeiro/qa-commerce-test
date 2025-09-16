/// <reference types="cypress" />

import { eCarrinho } from "../Elements/eCarrinho"


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

}
export default new carrinho