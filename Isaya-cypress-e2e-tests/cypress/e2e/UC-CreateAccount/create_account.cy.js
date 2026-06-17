// # Tests for registration workflow
// Cypress test spec for user registration.
/// <reference types="cypress" />

describe("Test spec for user registration", () => {
  it("Start page", () => {
    cy.visit("/");

    // Disable the cookie notice if it appears
    cy.get("body").then(($body) => {
      if ($body.find(".cky-notice-btn-wrapper > .cky-btn-accept").length) {
        cy.get(".cky-notice-btn-wrapper > .cky-btn-accept").click();
      }

      // Click on the "User" button
      cy.get("a").should("be.visible").contains("User").click();

      // Click on the "Register as Student" link
      cy.get("a").should("be.visible").contains("Register as Student").click();
    });

    // Fill in the registration form using fixture data
    cy.fixture("student-mock").then((student) => {
      // log the fixture object for debugging
      cy.log(JSON.stringify(student)).debug();
      // type the username into the user_login field
      cy.get('[name="user_login"]').type(student.username);
      cy.get('[name="user_email"]').type(student.email);
    });

    // Click on the "Register" button
    /* cy.get('[name="wp-submit"]').click();

    // Verify that the registration was successful
    cy.get(".login .message").should(
      "contain",
      "Registration complete. Please check your email.",
    ); */

    cy.visit("/wp-login.php?action=register");
    // Fill in the registration form using fixture data
    cy.fixture("student-mock").then((student) => {
      // log the fixture object for debugging
      cy.log(JSON.stringify(student));
      // type the username into the user_login field
      cy.get('[name="user_login"]').type(student.username);
      cy.get('[name="user_email"]').type("000000000");
    });

    // Click on the "Register" button
    cy.get('[name="wp-submit"]').click();

    // verify if failed to register with the same username and email
    cy.get("#login_error").should(
      "contain",
      "Error: This username is already registered. Please choose another one.",
    );
  });
});
