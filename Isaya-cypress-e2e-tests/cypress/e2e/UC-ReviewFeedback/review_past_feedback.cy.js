// # Tests for reviewing past submissions
/// <reference types="cypress" />

describe("Test for reviewing past submissions", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should log in and navigate to the review feedback (success)", () => {
    cy.successfullLoginProcess();

    // Navigate to the review feedback page
    cy.get('[href="https://student.michaelkentburns.com/my-completed-surveys/"]').click();

    // Open a survey
    cy.get(":nth-child(1) > .survey-link").click();

    // Check if the survey answers are displayed correctly
    cy.get(".answers-title").should("contain", "Your Answers for: Test Survey for Dar.");
  });

  it("Negative/Edge-case Test: review feedback (failed)", () => {
    cy.successfullLoginProcess();

    // Navigate to the review feedback page
    cy.get('[href="https://student.michaelkentburns.com/my-completed-surveys/"]').click();

    // Open a survey that has no questions
    cy.get(":nth-child(2) > .survey-link").click();

    // Check if the survey answers are displayed correctly
    cy.get(".no-questions").should("contain", "No questions found for this survey.");
  });
});
