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

// this is a custom command for registering a new student account
Cypress.Commands.add("register", (name, email) => {
  cy.visit("https://student.michaelkentburns.com/wp-login.php?action=register")
  cy.get("#user_login").type(name)
  cy.get("#user_email").type(email)
  cy.get('[name="wp-submit"]').click()
})

// this is a custom command for logging in a user with either email or username
Cypress.Commands.add("login", (identifier, password, type = "email") => {
  cy.visit("/User/login");

  if (type === "email") {
    cy.get("#email").type(Cypress.env("email"));
  } else {
    cy.get("#username").type(Cypress.env("username"));
  }

  cy.get("#password").type(Cypress.env("password"));
  cy.contains("Login").click();
});