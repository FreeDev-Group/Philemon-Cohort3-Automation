describe('template spec', () => {
  it('passes', () => {
    // this is a test to create an account for a user
    cy.visit('/')
    
    // this is for closing the cookie pop up
    cy.get('.cky-notice-btn-wrapper > .cky-btn-accept').should('be.visible').click();

    // this is for clicking on the user link and then clicking on the register as student link
    cy.get('a').contains('User').click();
    cy.get('a').contains('Register as Student').should('be.visible').click();

    // this is for filling the form with the user details
    cy.get('[name="user_login"]').type('paul afumba')
    cy.get('[name="user_email"]').type('paulafumba5@gmail.com');

// the following is the for the submit button to create the account, but in oder to avoid creating multiple accounts, I have commented it out.

    // cy.get('[name="wp-submit"]').click();
  })
})