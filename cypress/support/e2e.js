// Import custom commands
import './commands/navigation.commands';
import './commands/form.commands';
import './commands/practice-commands';

// Import utilities
import { logger } from './utils/logger';

/**
 * Global exception handler
 * Ignores all uncaught exceptions to prevent test failures
 */
Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error but don't fail the test
    console.log('Uncaught Exception:', err.message);
    
    // Return false to prevent Cypress from failing the test
    return false;
});

Cypress.on('window:before:load', (win) => {
    // Handle unhandled promise rejections
    win.addEventListener('unhandledrejection', (event) => {
        console.log('Unhandled Promise Rejection:', event.reason);
        event.preventDefault();
        return false;
    });
    
    // Handle general errors
    win.addEventListener('error', (event) => {
        console.log('Window Error:', event.error?.message || event.message);
        event.preventDefault();
        return false;
    });
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