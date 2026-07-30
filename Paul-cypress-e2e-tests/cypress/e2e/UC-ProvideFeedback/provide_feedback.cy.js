/// <reference types="cypress" />

describe("providing feedback process", () => {
  beforeEach(() => {
    cy.Successfullogin();
  });

  it("should reload the page when attempting to submit an empty feedback", () => {
    cy.submitFeedback();
    cy.get('#submit-btn').click();
    cy.wait(1000);
  });

  it("should successfully submit feedback", () => {
    cy.submitFeedback();
    cy.get('[name="answer[1393][]"]').check();
    cy.get('#submit-btn').click();
    cy.get('[href="https://student.michaelkentburns.com/"]').click();
  });
});
