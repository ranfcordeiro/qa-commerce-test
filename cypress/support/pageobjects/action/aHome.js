/// <reference types="cypress" />

import { eHome } from "../Elements/eHome";



class home {

    acessarUrl() {
        cy.visit(eHome.url.urlQaCommerce)
        cy.wait(2000)
    }

    informarQuantidadeProduto1(qtd) {
        cy.get(eHome.campos.txtQuantidade1)
            .should('be.visible')
            .clear()
            .wait(500)
            .type(qtd)
        cy.wait(2000)
    }

    clicarEmAdicionarAoCarrrinho() {
        cy.get(eHome.botoes.btnAdicionar1)
            .should('be.visible')
            .click()
        cy.wait(1000)
    }

    validarMensagemIncluidoComSucesso(mensagem){
        cy.xpath(eHome.mensagens.adicionadoComSucesso).then($msg=>{
            let mensagemObtida = $msg.text()
            expect(mensagemObtida).to.eq(mensagem)
        })
    }


}
export default new home