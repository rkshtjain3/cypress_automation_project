import { TIMEOUTS } from '../constants/timeouts';
import { logger } from '../utils/logger';

/**
 * Navigate to a specific section by scrolling
 * @param {string} sectionSelector - CSS selector for the section
 * @example cy.navigateToSection('#contact')
 */
Cypress.Commands.add('navigateToSection', (sectionSelector) => {
    logger.step(`Navigating to section: ${sectionSelector}`);

    cy.get(sectionSelector, { timeout: TIMEOUTS.MEDIUM })
        .should('exist')
        .scrollIntoView({ duration: TIMEOUTS.ANIMATION })
        .should('be.visible');
});

/**
 * Click link and verify navigation
 * @param {string} linkText - Text of the link to click
 * @param {string} expectedUrl - Expected URL after navigation
 * @example cy.clickAndVerifyNavigation('Courses', '/courses')
 */
Cypress.Commands.add('clickAndVerifyNavigation', (linkText, expectedUrl) => {
    logger.step(`Clicking link: ${linkText}`);

    cy.contains('a', linkText, { timeout: TIMEOUTS.MEDIUM })
        .should('be.visible')
        .click();

    cy.url({ timeout: TIMEOUTS.PAGE_LOAD })
        .should('include', expectedUrl);

    // Wait for page to load
    cy.get('h1', { timeout: TIMEOUTS.MEDIUM }).should('be.visible');

    logger.info(`Successfully navigated to ${expectedUrl}`);
});

/**
 * Verify link attributes
 * @param {string} linkText - Text of the link
 * @param {string} expectedHref - Expected href attribute
 * @example cy.verifyLink('Home', '/')
 */
Cypress.Commands.add('verifyLink', (linkText, expectedHref) => {
    cy.contains('a', linkText)
        .should('be.visible')
        .and('have.attr', 'href', expectedHref);
});
