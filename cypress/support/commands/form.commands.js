import { TIMEOUTS } from '../constants/timeouts';
import { logger } from '../utils/logger';

/**
 * Fill form field with validation
 * @param {string} selector - CSS selector for the field
 * @param {string} value - Value to type
 * @param {boolean} shouldValidate - Whether to trigger validation
 * @example cy.fillField('[name="firstName"]', 'John')
 */
Cypress.Commands.add('fillField', (selector, value, shouldValidate = true) => {
    logger.step(`Filling field: ${selector} with value: ${value}`);

    cy.get(selector, { timeout: TIMEOUTS.MEDIUM })
        .should('be.visible')
        .clear()
        .type(value, { delay: 50 })
        .should('have.value', value);

    if (shouldValidate) {
        cy.get(selector).blur(); // Trigger validation
    }
});

/**
 * Fill contact form
 * @param {Object} formData - Form data object
 * @example cy.fillContactForm({ firstName: 'John', lastName: 'Doe', ... })
 */
Cypress.Commands.add('fillContactForm', (formData) => {
    logger.step('Filling contact form');

    if (formData.firstName) {
        cy.fillField('[name="firstName"]', formData.firstName);
    }

    if (formData.lastName) {
        cy.fillField('[name="lastName"]', formData.lastName);
    }

    if (formData.email) {
        cy.fillField('[name="email"]', formData.email);
    }

    if (formData.phone) {
        cy.fillField('[name="phone"]', formData.phone);
    }

    if (formData.course) {
        cy.get('[name="course"]').select(formData.course);
    }

    if (formData.message) {
        cy.get('[name="message"]').type(formData.message);
    }

    logger.info('Contact form filled successfully');
});

/**
 * Verify field is required
 * @param {string} selector - CSS selector for the field
 * @example cy.verifyFieldRequired('[name="email"]')
 */
Cypress.Commands.add('verifyFieldRequired', (selector) => {
    cy.get(selector)
        .should('have.attr', 'required');
});

/**
 * Verify field validation message
 * @param {string} selector - CSS selector for the field
 * @example cy.verifyFieldValidity('[name="email"]')
 */
Cypress.Commands.add('verifyFieldValidity', (selector) => {
    cy.get(selector).then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.not.be.empty;
    });
});
