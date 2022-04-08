export class MobileReplenishment {

    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }


    typeFullName(firstName, lastName) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(lastName)
    }


    checkDebitCard(debitCard) {
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }

    checkDebitAmount(debitAmount, debitCurrency) {
        cy.get('[data-qa-node="amount"]').eq(1)
            .should('contain.text', debitAmount)
            .should('contain.text', debitCurrency)
    }

    checkDebitCommission(debitValue, debitMatch) {
        cy.get('[data-qa-node="commission"]').eq(1)
            .should('have.text', debitValue, debitMatch)
    }

}

export const mobileReplenishment = new MobileReplenishment()