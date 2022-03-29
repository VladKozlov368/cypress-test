///<reference types="Cypress"/ >






// it('ByID',() => {
//     cy.visit("http://uk-ua.facebook.com/")
//     cy.get('#email')
// })
//
// it('By Class', () => {
//     cy.visit('http://uk-ua.facebook.com/')
//     cy.get('.inputtext')
// })
//
// it('By Different Tag', () => {
//     cy.visit('http://uk-ua.facebook.com/')
//     cy.get('[data-testid="open-registration-form-button"]')
// })
//
// it('By Different Types', () => {
//     cy.visit('https://docs.cypress.io/api/commands/intercept#Syntax')
//     cy.get('button[type="button"][aria-label="Search"]')
// })
//
// it('By Contains name', () => {
//     cy.visit('https://next.privat24.ua/')
//     cy.get('*[class^="card"]')
// })

// it('By Tag value', () => {
//     cy.visit('http://uk-ua.facebook.com/')
//     cy.get('[name="login"]')
// })
//
// it('By Text', () => {
//     cy.visit('http://uk-ua.facebook.com/')
//     cy.get("a[href*='facebook_login']")
// })
//
// it('By Class', () => {
//     cy.visit('http://uk-ua.facebook.com/')
//     cy.get("._8esh")
// })

// it.only('Using Get With Find and Eq', () => {
//     cy.visit('https://next.privat24.ua/deposit')
//     cy.get('tbody')
//         .find('td')
//         .find('div')
//         .find('button')
//         .eq(0)
// })


it.only('Using Get With Find and Eq', () => {
    cy.viewport(1500,700)
    cy.visit('http://docs.cypress.io/guides/overview/why-cypress')
    cy.get('main')
        .find('aside')
        .find('div').eq(4)
        .click();
})