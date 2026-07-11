/// <reference types="cypress" />

describe("New student account creation", () => {
  it("should create a new student account", () => {
    const id = Date.now();

    const name = `fakeuser${id}`;
    const email = `fakeuser${id}@example.com`;

    cy.register(name, email);

    cy.url().should("not.include", "/wp-login.php?action=register");

    cy.get("body").should("be.visible");

    cy.wait(3000);
  });
});
