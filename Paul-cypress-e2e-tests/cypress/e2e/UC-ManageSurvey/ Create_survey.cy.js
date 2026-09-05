/// <reference types="cypress" />

describe('Creating a new survey', () => {

    it('should successfully create a new survey', () => {
cy.instructorlogin();

cy.get('#menu-posts-survey > .wp-has-submenu > .wp-menu-name').should('be.visible').click();

cy.get('#menu-posts-survey > .wp-submenu > :nth-child(3) > a').should('be.visible').click();

cy.get('#title').should('be.visible').type('Paul create survey test');

cy.get('[name="survey_description"]').type('this is a test survey');

cy.scrollTo('top');

cy.get('#publish', { timeout: 15000 })
      .should('exist')
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: true });

  cy.wait(4000);

  cy.url()
  .should('match', /\/wp-admin\/post\.php\?post=\d+&action=edit$/);

cy.get('a').contains('View post').should('be.visible').click();

cy.get('body').should('be.visible');

});

})