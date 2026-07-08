// # Tests for user authentication
/// <reference types="cypress" />

describe("template spec", () => {
  // Visit the login page before each test
  beforeEach(() => cy.visit("/wp-login.php"));

  it("Should display an error message for invalid credentials", () => {
    // cy.visit("/wp-login.php");

    // Load the student-mock fixture and perform login
    cy.fixture("student-mock").then((student) => {
      // Use the custom command to fill in the login input fields with invalid credentials and submit the form
      cy.loginInputFields(student.username, "invalidPassword");

      // Use the custom command to check the "Remember Me" checkbox and submit the login form
      cy.checkAndSubmitInLoginProcess();
    });

    // Assert that the error message is displayed for invalid credentials
    cy.get("#login_error").should("be.visible");

    cy.wait(2000); // Wait for 2 seconds to allow the page to load
  });

  // Test successful login
  it("Test successful login", () => cy.successfullLoginProcess());
});
