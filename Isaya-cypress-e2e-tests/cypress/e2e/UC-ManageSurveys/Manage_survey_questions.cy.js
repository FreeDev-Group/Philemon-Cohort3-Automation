/// <reference types="cypress" />

describe("Manage survey questions", () => {
  it("should display the list of survey questions", () => {
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
      cy.wait(1000); // Wait for 1 second to allow the survey to be created
      cy.get('[name="publish"]').click();
    });

    const surveyQuestionsMenu = () => cy.get("#menu-posts-question > .wp-has-submenu > .wp-menu-name").click();

    describe("Create survey question", () => {
      surveyQuestionsMenu();

      // Open the "Add New" survey question page
      cy.get(".page-title-action").click();

      const questionTitle = "Test Survey Question - " + new Date().getTime();
      cy.get('[name="post_title"]').type(questionTitle);

      cy.get('[name="answer_options"]').type("This is a test survey question.");

      cy.get('[name="question_type"]').select("text");

      cy.get('[name="question_parent_survey"]').select(surveyTitle);

      // Click the "Publish" button to create the survey question
      cy.get('[name="publish"]').click();
    });

    describe("Delete survey question", () => {
      // Back to the survey questions list page
      surveyQuestionsMenu();

      cy.get(".title > strong > .row-title:first").click();
      cy.get(".submitdelete").click();
      // Confirm the deletion in the confirmation dialog
      // cy.get("#message > p").contains("1 post moved to the Trash.").should("be.visible");
    });

    // Delete the survey created for testing
    describe("Delete survey", () => {
      surveyMenu();
      cy.get(".title > strong > .row-title:first").click();
      cy.get(".submitdelete").click();
    });
  });
});
