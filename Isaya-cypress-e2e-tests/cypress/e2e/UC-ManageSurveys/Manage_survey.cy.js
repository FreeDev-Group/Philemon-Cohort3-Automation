// # Tests for instructor survey management
/// <reference types="cypress" />

describe("Manage student surveys", () => {
  // - Login
  // - create survey
  // - edit survey
  // - remove survey
  it("should display the list of student surveys", () => {
    cy.visit("/wp-login.php");
    cy.successfullLoginProcess(true);

    const surveyMenu = () => cy.get("#menu-posts-survey > .wp-has-submenu > .wp-menu-name").click();

    const surveyTitle = "Test Survey - " + new Date().getTime();
    surveyMenu();

    describe("Create survey", () => {
      // Open the "Add New" survey page
      cy.get(".page-title-action").click();

      cy.get('[name="post_title"]').type(surveyTitle);

      cy.get('[name="survey_description"]').type("This is a test survey.");

      cy.get('[name="survey_start_date"]').type("2023-01-01");

      cy.get('[name="survey_end_date"]').type("2023-01-01");

      // Click the "Publish" button to create the survey
      cy.get('[name="publish"]').click();
    });

    // Back to the survey list page
    surveyMenu();

    describe("Edit survey", () => {
      cy.get(".title > strong > .row-title:first").click();

      cy.get('[name="post_title"]')
        .clear()
        .type(surveyTitle + " - Edited");

      cy.get('[name="survey_description"]').clear().type("This is an edited test survey.");

      cy.get('[name="survey_start_date"]').type("2023-01-01");

      cy.get('[name="survey_end_date"]').type("2023-01-01");

      // Click the "Update" button to save the changes
      cy.get('[name="publish"]').click();
    });

    // Back to the survey list page
    surveyMenu();

    describe("Remove survey", () => {
      cy.get(".title > strong > .row-title:first").click();
      cy.get(".submitdelete").click();

      // Confirm the deletion in the confirmation dialog
      cy.get("#message > p").contains("1 post moved to the Trash.").should("be.visible");
    });
  });
});
