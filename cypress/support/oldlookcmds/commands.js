// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add('placeHolder', () => {
    return cy.xpath("//input[@placeholder='Type here…']");
  });
  
Cypress.Commands.add('clickSendButton', () => {
    return cy.xpath("(//i[@id='send_button_icon'])[1]").click();
  });
  
Cypress.Commands.add('displayStars', () => {
    return cy.xpath("//div[@class='rating-stars']");
  });

Cypress.Commands.add('week', () => {
    return cy.xpath("//li[@value='{\"name\":\"Thursday\"}']");
  });

Cypress.Commands.add('month', () => {
    return cy.xpath("//li[@value='{\"name\":\"April\"}']");
  });

Cypress.Commands.add('timeZone', () => {
    return cy.xpath("//li[@value='{\"name\":\"(-11:00) Midway Island, Samoa(-10:00) Hawaii\"}']");
  });

Cypress.Commands.add('continents', () => {
    return cy.xpath("//li[@value='{\"name\":\"Australia\"}']");
  });

Cypress.Commands.add('usStates', () => {
    return cy.xpath("//li[@value='{\"name\":\"Alaska\"}']");
  });

Cypress.Commands.add('indianStates', () => {
    return cy.xpath("//li[@value='{\"name\":\"Haryana\"}']");
  });

Cypress.Commands.add('indianCities', () => {
    return cy.xpath("//li[@value='{\"name\":\"Chittoor\"}']");
  });

Cypress.Commands.add('customList', () => {
    return cy.xpath("//li[@value='{\"name\":\"Suggestion Option Text\"}']");
  });

Cypress.Commands.add('clickCalendar', () => {
    return cy.xpath("//a[normalize-space()='Calendar']").click();
  });
  
Cypress.Commands.add('selectToday', () => {
    return cy.xpath("//div[contains(@aria-label, 'Today')]").click({ multiple: true, force: true });
  });
  
Cypress.Commands.add('clickTime', () => {
    return cy.xpath("//a[normalize-space()='Time']").click();
  });
  
Cypress.Commands.add('selectFirstTimeSlot', () => {
    return cy.xpath("//div[@class='time_slot_wrap']/span[1]").click();
  });
  
Cypress.Commands.add('autosuggestLocation', (location) => {
    cy.get('input[placeholder="Type here…"]').type(location);
    cy.xpath("//div[@class='pac-container pac-logo hdpi']").should('exist');
    cy.xpath("//div[@class='pac-item']").first().click({ force: true });
    cy.wait(500);
    cy.get('i#send_button_icon').click();
  });
  
  
  


//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })