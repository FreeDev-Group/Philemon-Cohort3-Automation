/// <reference types="cypress" />

describe("UC-Logout", () => {
  it("Test of logout functionality", () => {
    cy.visit("/wp-login.php");

    // Perform login first
    cy.successfullLoginProcess();

    // Logout the user after successful login
    cy.get('[href="#"]').contains("Student").click();
    cy.get("a").contains("Logout").should("be.visible").click();

    // Verify the user is redirected to the expected URL
    cy.url().should("eq", "https://student.michaelkentburns.com/");
  });
});
