///<reference types="Cypress"/ >

import {mobileReplenishment} from "../support/pager/mobileReplenishment";
import {transfers} from "../support/pager/transfer";
import {basePage} from "../support/pager/basePage";

it('Replenishment of UKR mobile phone', () => {
    basePage.open('https://next.privat24.ua/mobile');
    mobileReplenishment.typePhoneNumber('933200136');
    basePage.typeAmout('1');
    basePage.typeDebitCardData('4552331448138217', '0524', '111');
    cy.wait(3000);
    basePage.submitPayment();
    cy.wait(3000);
    mobileReplenishment.typeFullName('Slava', 'Loshenko');
    basePage.submitPayment();
    mobileReplenishment.checkDebitCard('4552 **** **** 8217');
    mobileReplenishment.checkDebitAmount('1', 'UAH');
    mobileReplenishment.checkDebitCommission('2', 'UAH');
});


it('Money transfer between foreign cards', () => {
    basePage.open('https://next.privat24.ua/money-transfer/card');
    basePage.typeDebitCardData('4552331448138217', '0524', '111');
    transfers.typeDebitFullName('Slava', 'Loshenko');
    transfers.typeRecieverCard('4486441729154030');
    basePage.typeAmout('1500');
    transfers.typeComment('Cypress test');
    basePage.submitPayment();
    transfers.checkDebitAndRecieverCards('4552 3314 4813 8217', '4486 4417 2915 4030');
    transfers.checkRecieverAmountAndTotal('1 500 UAH', '1 617.28');
    transfers.checkResieverCurrency('0 UAH');
});