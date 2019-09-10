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
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// @Todo: Cypress recommends not to use the browser to login and send a post request instead.
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/user/login')
    .get('.user-login-form')
    .find('#edit-name')
    .type(username)
    .get('.user-login-form')
    .find('input[type="password"]')
    .type(password)
    .get('[data-drupal-selector="edit-actions"]')
    .find('[data-drupal-selector="edit-submit"]')
    .click();
});
