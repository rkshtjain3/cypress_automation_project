describe('Navigation - Tests', { tags: ['@smoke', '@navigation'] }, () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('should display the header', () => {
        cy.get('header').should('be.visible');
    })

    it('should have navigation links', () => {
        cy.get('nav').should('exist');
    })
})
