/// <reference types="cypress" />

import { eCart } from "../Elements/eCArt"


class cart {

    validaProdutoEscolhido(descricao) {
        cy.get(eCart.labels.descricaoProduto)
            .should('be.visible')
            .contains(descricao)
        cy.wait(2000)
    }

    validaCorProduto() {
        cy.get(eCart.labels.cor)
            .should('have.css', 'background-color', 'rgb(65, 65, 65)')
        cy.wait(2000)
    }

    validaValorProduto(valor) {
        cy.get(eCart.labels.valorProduto).then($val => {
            let valorObtido = $val[0].innerText
            expect(valorObtido).to.eq(valor)
        })
    }
}
export default new cart