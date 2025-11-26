/**
 * Logger utility for structured logging in Cypress tests
 */
export const logger = {
    /**
     * Log info message
     */
    info: (message, data = {}) => {
        const logMessage = `ℹ️  ${message}`;
        cy.log(logMessage);

        if (Object.keys(data).length > 0) {
            cy.log(JSON.stringify(data, null, 2));
        }

        cy.task('log', {
            level: 'INFO',
            message,
            data,
            timestamp: new Date().toISOString()
        }, { log: false });
    },

    /**
     * Log error message
     */
    error: (message, error = {}) => {
        const logMessage = `❌ ${message}`;
        cy.log(logMessage);

        if (error.message) {
            cy.log(`Error: ${error.message}`);
        }

        cy.task('log', {
            level: 'ERROR',
            message,
            error: error.message || error,
            timestamp: new Date().toISOString()
        }, { log: false });
    },

    /**
     * Log step/action
     */
    step: (message) => {
        cy.log(`➡️  Step: ${message}`);

        cy.task('log', {
            level: 'STEP',
            message,
            timestamp: new Date().toISOString()
        }, { log: false });
    },

    /**
     * Log warning 
     */
    warn: (message, data = {}) => {
        const logMessage = `⚠️  ${message}`;
        cy.log(logMessage);

        cy.task('log', {
            level: 'WARN',
            message,
            data,
            timestamp: new Date().toISOString()
        }, { log: false });
    }
};
