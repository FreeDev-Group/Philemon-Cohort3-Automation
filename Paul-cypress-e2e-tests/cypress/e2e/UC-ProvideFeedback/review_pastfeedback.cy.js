/// <reference types="cypress" />

describe("reviewing past feedback process", () => {
  it("should successfully review past feedback from surveys I answered", () => {
    cy.Successfullogin();
    cy.get(
      '[href="https://student.michaelkentburns.com/my-completed-surveys/"]',
    ).click();
    cy.get(":nth-child(2) > .survey-link").click();
    cy.get('.survey-answers-block')
    .scrollIntoView()
  .should('be.visible');
  cy.wait(1000);
  cy.get('.my-surveys-title')
  cy.scrollTo("top");
  });

  it("should display responses for surveys I answered", () => {
    cy.Successfullogin();
    cy.get(
      '[href="https://student.michaelkentburns.com/my-completed-surveys/"]',
    ).click();
    cy.get(':nth-child(1) > .survey-link').click();
    cy.get('.survey-answers-block')
    .scrollIntoView()
  .should('be.visible');
  cy.wait(1000);
  });
});
