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


// it.only('Using Get With Find and Eq', () => {
//     cy.viewport(1500,700)
//     cy.visit('http://docs.cypress.io/guides/overview/why-cypress')
//     cy.get('main')
//         .find('aside')
//         .find('div').eq(4)
//         .click();
// })

// it('', ()=>{
//     cy.visit('https://next.privat24.ua/mobile?lang=en')
//     cy.contains('Sign in')
// })

// it('', ()=>{
//     cy.visit('https://next.privat24.ua/mobile?lang=en')
//     cy.contains('SIGN IN', {matchCase: false})
// })

// it('', ()=>{
//     cy.viewport(1500,2500)
//     cy.visit('http://next.privat24.ua/mobile?lang=en')
//     cy.get('body')
//         .contains('Read more')
//         .click()
// })

//
// it('SHOLD',() =>{
//     cy.visit('http://next.privat24.ua/mobile?lang=en')
//     cy.get('[data-qa-node="amount"]')
//         .type(100)
//         .should('have.value',100)
//         .and('be.visible')
// })

// it('EXPECT',() =>{
//     cy.visit('http://next.privat24.ua/mobile?lang=en')
//     cy.get('[data-qa-node="amount"]')
//         .type(100).then(input=>{
//             expect(input).to.have.value(100)
//     })
// })

// it('EXPECT',() =>{
//     cy.visit('http://next.privat24.ua/deposit?lang=en')
//     cy.get('[data-qa-value="UAH"]')
//         .should('be.checked')
// })

// it('check is visible arch link',() =>{
//     cy.visit('http://next.privat24.ua/deposit?lang=en')
//     cy.contains('Мої депозити')
//         .trigger('mouseover')
//         .get('#archiveDeposits')
//         .should('be.visible')
//         .click()
// })

// it('check is correct attr in button',() =>{
//     cy.visit('https://next.privat24.ua/?lang=en')
//     cy.contains('Show cards')
//         .should('have.attr','type')
//         .and('match',/button/)
//
// })

// it('check is correct attr in button',() =>{
//     cy.visit('https://next.privat24.ua/?lang=en')
//     cy.url()
//         .should('eq', 'https://next.privat24.ua/?lang=en')
// })

