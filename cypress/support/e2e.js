// Import custom commands
import './commands/navigation.commands';
import './commands/form.commands';

// Import utilities
import { logger } from './utils/logger';

/**
 * Global exception handler
 * Only ignores specific React hydration errors, logs everything else
 */
Cypress.on('uncaught:exception', (err) => {
    // Ignore React hydration error
    if (err.message.includes('Minified React error #418')) {
        logger.warn('Ignoring React hydration error #418');
        return false;
    }

    // Ignore Hydration mismatch errors
    if (err.message.includes('Hydration')) {
        logger.warn('Ignoring Hydration error');
        return false;
    }

    // Log other uncaught exceptions
    logger.error('Uncaught exception in application', err);

    // Let other errors fail the test
    return true;
});

/**
 * Screenshot on test failure
 */
Cypress.on('fail', (error, runnable) => {
    logger.error(`Test failed: ${runnable.title}`, error);
    throw error;
});

/**
 * Before each test - Log test start
 */
beforeEach(function () {
    logger.info(`🧪 Starting test: ${this.currentTest.title}`);
});

/**
 * After each test - Log test result
 */
afterEach(function () {
    const testState = this.currentTest.state;
    const testTitle = this.currentTest.title;

    if (testState === 'passed') {
        logger.info(`✅ Test passed: ${testTitle}`);
    } else if (testState === 'failed') {
        logger.error(`❌ Test failed: ${testTitle}`);
    }
});