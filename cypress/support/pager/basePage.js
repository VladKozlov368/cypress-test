export class BasePage{
 open(url){
     cy.visit(url)
 }
    typeAmout(amout) {
        cy.get('[data-qa-node="amount"]')
            .type(amout)
    }

    typeDebitCardData(cardNumber, expDate, cvv) {
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    submitPayment(){
        cy.get('button[type="submit"]')
            .click()
    }

}
export const basePage = new BasePage()