export class Transfers{
    typeDebitFullName(firstName, lastName){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
        cy.get('[data-qa-node="lastNamedebitSource"]')
            .type(lastName)
    }

    typeRecieverCard(){
        cy.get('[data-qa-node="numberreceiver"]')
            .type('4486441729154030')
    }


    typeComment(comment){
    cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[data-qa-node="comment"]')
            .type(comment)
    }

    checkDebitAndRecieverCards(debitCard, recieverCard){
    cy.get('[data-qa-node="payer-card"]')
            .should('have.text', debitCard)
        .get('[data-qa-node="receiver-card"]')
        .should('have.text', recieverCard)
    }
    checkRecieverAmountAndTotal(recieverAmount, recieverTotal){
    cy.get('[data-qa-node="receiver-amount"]')
            .should('have.text', recieverAmount)
            .get('[data-qa-node="total"]')
            .should('contain.text', recieverTotal)
    }
    checkResieverCurrency(resieverCurrency){
    cy.get('[data-qa-node="receiver-currency"]')
            .should('have.text', resieverCurrency)
    }
}
export const transfers = new Transfers