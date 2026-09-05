// # Tests for taking surveys
/// <reference types="cypress" />

describe('Automated E2E verification of "Provide Feedback" use case', () => {
  // return; // Temporarily disable the test suite to prevent execution during the CI/CD pipeline

  // Visit the login page before each test
  beforeEach(() => cy.visit("/wp-login.php"));

  it("Navigate to the active survey, fill out the required fields.", () => {
    // Login to the application
    cy.successfullLoginProcess();

    describe("Navigate to the active survey", () => {
      // Navigate to the survey page
      cy.get('.dynamic-main-menu > [href="https://student.michaelkentburns.com/survey/"]').click();

      // Click on the active survey link
      cy.get(".wp-block-group > .wp-block-post-title > a")
        .first()
        .should("be.visible")
        // .contains("Cy Test Provide Feedback by Prince-i E")
        .click();
    });

    return;
    describe("Fill out and submit the survey", () => {
      // Fill out the required fields in the survey
      cy.get('[name="answer[908][]"]')
        .first()
        .check()
        .then(() => {
          cy.log("First answer option selected successfully.");
        });

      // Submit the survey
      cy.get("#submit-btn").click();
    });

    describe("Assert that feedback is success", () => {
      cy.get(".survey-success")
        .should("be.visible")
        .contains("Merci, vos réponses ont bien été enregistrées !")
        .then(() => {
          cy.log("Success feedback assertion passed: Survey responses have been successfully recorded.");
        });
      cy.log("Success feedback assertion passed: Survey responses have been successfully recorded.");
    });
  });

  it("Check negative submission feedback", () => {
    // Login to the application
    cy.successfullLoginProcess();

    describe("Navigate to the active survey", () => {
      cy.get('.dynamic-main-menu > [href="https://student.michaelkentburns.com/survey/"]').click();

      // Click on the active survey link
      cy.get(".wp-block-group > .wp-block-post-title > a")
        .first()
        .should("be.visible")
        // .contains("Cy Test Provide Feedback by Prince-i E")
        .click();
    });

    describe("Assert that feedback is negative", () => {
      cy.get(".survey-info").should("be.visible").contains("You have already responded to this survey. Thank you!");
      cy.log("Negative feedback assertion passed: User has already responded to the survey.");
    });
  });
});
