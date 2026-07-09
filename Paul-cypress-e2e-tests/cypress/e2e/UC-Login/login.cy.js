/// <reference types="cypress" />

describe("Login in process", () => {
  it("successful login with valid credentials", () => {
    cy.login();
  });

  it("unsuccessful login with invalid credentials", () => {
    cy.visit("https://student.michaelkentburns.com/wp-login.php");
    cy.get("#user_login").type("invaliduser");
    cy.get("#user_pass").type("invalidpassword");
    cy.get('[name="wp-submit"]').click();
    cy.get("#login_error").should("be.visible");

    cy.url().should("include", "/wp-login.php");

    cy.wait(3000);
  });
});
