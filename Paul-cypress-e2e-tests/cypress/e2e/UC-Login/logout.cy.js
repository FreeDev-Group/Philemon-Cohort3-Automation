/// <reference types="cypress" />

describe('logout', () => {
    it('should log out successfully', () => {
        cy.Successfullogin();
        cy.logout();
    })
});
