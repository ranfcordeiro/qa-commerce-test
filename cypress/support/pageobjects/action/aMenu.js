/// <reference types="cypress" />

import { eHome, eMenu } from "../Elements/eMenu";



class menu {

    clicarNoMenuCarrinho() {
        cy.get(eMenu.botoes.btnMenuCarrinho)
            .click()
        cy.wait(1000)
    }

}
export default new menu