import { logger } from '../utils/logger';
import { TIMEOUTS } from '../constants/timeouts';

// Base Page utility functions
const basePage = {
    /**
     * Visit a URL with proper error handling
     * @param {string} url - URL to visit (defaults to baseUrl if just '/')
     */
    visit(url = '/') {
        logger.step(`Visiting: ${url}`);

        cy.visit(url, {
            failOnStatusCode: false,
            timeout: TIMEOUTS.PAGE_LOAD
        });
    },

    /**
     * Get element with timeout
     * @param {string} selector - CSS selector
     * @param {object} options - Cy options
     */
    getElement(selector, options = {}) {
        return cy.get(selector, {
            timeout: TIMEOUTS.MEDIUM,
            ...options
        });
    },

    /**
     * Find text content
     * @param {string} text - Text to find
     */
    contains(text) {
        return cy.contains(text, { timeout: TIMEOUTS.MEDIUM });
    },

    /**
     * Wait for element to be visible
     * @param {string} selector - CSS selector
     */
    waitForElement(selector) {
        logger.step(`Waiting for element: ${selector}`);
        return this.getElement(selector).should('be.visible');
    }
};

export default basePage;
