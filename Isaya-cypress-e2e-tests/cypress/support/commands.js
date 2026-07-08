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

// Custom command to fill in the login input fields with provided username and password
Cypress.Commands.add(
  "loginInputFields",
  (username, password = "0000", force = false) => {
    cy.get('input[name="log"]').type(username, { force });
    cy.get('input[name="pwd"]').type(password, { force });
  },
);

// Custom function to perform login with valid credentials
Cypress.Commands.add("successfullLoginProcess", () => {
  // Load the student-mock fixture and perform login
  cy.fixture("student-mock").then((student) => {
    // Use the custom command to fill in the login input fields and submit the form
    cy.loginInputFields(" " + student.username, "GGC^!jbNv1hYy8fp", true);

    // Use the custom command to check the "Remember Me" checkbox and submit the login form
    cy.checkAndSubmitInLoginProcess();

    // Accept cookies if the button is present
    cy.wait(1500); // Wait for 1.5 seconds to allow the page to load
    cy.get(".cky-notice-btn-wrapper > .cky-btn-accept").click();
  });
});
