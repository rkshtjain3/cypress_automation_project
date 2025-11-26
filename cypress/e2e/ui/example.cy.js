/**
 * UI Tests - Example Domain
 * 
 * Reliable UI tests using example.com (a stable test site)
 */

describe('UI Tests - Example.com', { tags: ['@ui', '@smoke'] }, () => {

    it('should load the page successfully', () => {
        cy.visit('https://example.com');
        cy.url().should('include', 'example.com');
    });

    it('should display main heading', () => {
        cy.visit('https://example.com');
        cy.get('h1').should('be.visible');
    });

    it('should have a paragraph with text', () => {
        cy.visit('https://example.com');
        cy.get('p').should('be.visible');
    });

    it('should have a link', () => {
        cy.visit('https://example.com');
        cy.get('a').should('be.visible');
    });
});
