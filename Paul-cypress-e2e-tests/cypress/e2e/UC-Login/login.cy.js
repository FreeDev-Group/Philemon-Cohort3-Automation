/// <reference types="cypress" />

describe("Login-in process", () => {

  it("should display an error message for invalid credentials", () => {
    cy.Unsuccessfullogin();

    cy.wait(1000);
  });


  it("should log in successfully with valid credentials", () => {
    cy.Successfullogin();
  });

});
