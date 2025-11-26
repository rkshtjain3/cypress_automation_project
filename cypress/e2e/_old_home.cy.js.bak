describe('Home Page - Tests', { tags: ['@smoke', '@home'] }, () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('should load the homepage successfully', () => {
        cy.url().should('eq', 'https://testproai.com/');
    })

    it('should display main content', () => {
        cy.get('main').should('be.visible');
    })
})
