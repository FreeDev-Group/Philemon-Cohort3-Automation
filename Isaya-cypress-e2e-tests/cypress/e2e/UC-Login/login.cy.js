// # Tests for user authentication
/// <reference types="cypress" />

describe("template spec", () => {
  it("Should display an error message for invalid credentials", () => {
    cy.visit("/wp-login.php");

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

  it("Test successful login", () => {
    cy.visit("/wp-login.php");

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
});
