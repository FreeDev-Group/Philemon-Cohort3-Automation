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
  cy.visit("https://student.michaelkentburns.com/wp-login.php?action=register");
  cy.get("#user_login").type(name);
  cy.get("#user_email").type(email);
  cy.get('[name="wp-submit"]').click();
});

// this is a custom command for logging in a user with either email or username
Cypress.Commands.add("Unsuccessfullogin", () => {
  cy.visit("https://student.michaelkentburns.com/wp-login.php");
  cy.get("#user_login").type(Cypress.env("fakeusername"));
  cy.get("#user_pass").type(Cypress.env("fakepassword"));
  cy.get('[name="wp-submit"]').click();
  cy.get("#login_error").should("be.visible");
});

Cypress.Commands.add("Successfullogin", () => {
  cy.visit("https://student.michaelkentburns.com/wp-login.php");
  cy.get("#user_login").type(Cypress.env("username"), { force: true });
  cy.get("#user_pass").type(Cypress.env("password"));
  cy.get('[name="wp-submit"]').click();
  cy.url().should("not.include", "/wp-login.php");
  cy.get("body").should("be.visible");
  cy.wait(1000);
});

Cypress.Commands.add("logout", () => {
  cy.visit("https://student.michaelkentburns.com");
  cy.get("a").contains("Student").should("be.visible").click();
  cy.get("a").contains("Logout").should("be.visible").click();
  cy.url().should("not.include", "/wp-login.php?action=logout");
  cy.get("body").should("be.visible");
  cy.wait(3000);
});
