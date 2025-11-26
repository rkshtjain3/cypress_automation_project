// Base Page utility functions
const basePage = {
    visit(url = '/') {
        // Handle React hydration error globally
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit(url)
    },

    getElement(selector) {
        return cy.get(selector)
    },

    contains(text) {
        return cy.contains(text)
    }
}

export default basePage;
