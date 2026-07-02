/// <reference types="cypress" />

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

// Custom command to check the "Remember Me" checkbox and submit the login form
Cypress.Commands.add("checkAndSubmitInLoginProcess", () => {
  cy.get('[name="rememberme"]').check();
  cy.get('[name="wp-submit"]').click();
});

Cypress.Commands.add(
  "loginInputFields",
  (username, password = "0000", force = false) => {
    cy.get('input[name="log"]').type(username, { force });
    cy.get('input[name="pwd"]').type(password, { force });
  },
);
