import basePage from './BasePage';

// Selectors
const selectors = {
    // Main page elements
    mainHeading: 'h1',
    introSection: '[data-testid="intro-section"]',
    projectCard: '[data-testid="project-card"]',
    startPracticeButton: 'button:contains("Start Practice")',
    
    // Project cards
    loginModule: ':contains("Login Module")',
    registrationModule: ':contains("Registration Module")',
    contactForm: ':contains("Contact Form")',
    shoppingCart: ':contains("Shopping Cart")',
    searchFilter: ':contains("Search & Filter")',
    userProfile: ':contains("User Profile")',
    bookingSystem: ':contains("Booking System")',
    
    // Difficulty levels
    beginnerLevel: ':contains("Beginner")',
    intermediateLevel: ':contains("Intermediate")',
    advancedLevel: ':contains("Advanced")',
    
    // Detail page elements
    projectOverview: ':contains("Project Overview")',
    businessContext: ':contains("Business Context")',
    requirementsList: ':contains("Requirements / User Stories")',
    requirementItem: '[data-testid="requirement-item"]',
    practiceTasks: ':contains("Practice Tasks")',
    launchAppButton: ':contains("Open Practice App")',
    
    // Navigation
    breadcrumb: 'nav',
    homeLink: 'nav :contains("Home")',
    practiceLink: 'nav :contains("Practice")'
};

// Page Object
const practiceLabPage = {
    /**
     * Visit practice lab homepage
     */
    visitPracticeLab() {
        basePage.visit('/practice');
    },

    /**
     * Visit specific practice module detail page
     * @param {string} moduleSlug - Module slug (e.g., 'login-module')
     */
    visitPracticeModule(moduleSlug) {
        basePage.visit(`/practice/${moduleSlug}`);
    },

    /**
     * Verify practice lab homepage elements
     */
    verifyHomepage() {
        basePage.getElement(selectors.mainHeading).should('contain', 'Manual Testing Practice Lab');
        basePage.contains('Welcome to the Testing Lab').should('be.visible');
        basePage.contains('Practice your manual testing skills').should('be.visible');
    },

    /**
     * Verify all project cards are displayed
     */
    verifyProjectCards() {
        basePage.getElement(selectors.projectCard).should('have.length.at.least', 7);
        
        // Verify specific modules
        basePage.contains('Login Module').should('be.visible');
        basePage.contains('Registration Module').should('be.visible');
        basePage.contains('Contact Form').should('be.visible');
        basePage.contains('Shopping Cart').should('be.visible');
        basePage.contains('Search & Filter').should('be.visible');
        basePage.contains('User Profile').should('be.visible');
        basePage.contains('Booking System').should('be.visible');
    },

    /**
     * Verify difficulty levels are displayed
     */
    verifyDifficultyLevels() {
        basePage.contains('Beginner').should('be.visible');
        basePage.contains('Intermediate').should('be.visible');
        basePage.contains('Advanced').should('be.visible');
    },

    /**
     * Click start practice button for a specific module
     * @param {string} moduleName - Name of the module
     */
    clickStartPractice(moduleName) {
        basePage.contains(moduleName).parent().contains('Start Practice').click();
    },

    /**
     * Verify project detail page elements
     */
    verifyProjectDetailPage() {
        basePage.contains('Project Overview').should('be.visible');
        basePage.contains('Business Context').should('be.visible');
        basePage.contains('Requirements / User Stories').should('be.visible');
        basePage.contains('Practice Tasks').should('be.visible');
    },

    /**
     * Verify requirements list
     */
    verifyRequirementsList() {
        basePage.getElement(selectors.requirementItem).should('have.length.at.least', 1);
    },

    /**
     * Verify breadcrumb navigation
     */
    verifyBreadcrumb() {
        basePage.getElement(selectors.breadcrumb).should('contain', 'Home').and('contain', 'Practice');
    },

    /**
     * Click launch practice app button
     */
    clickLaunchApp() {
        basePage.contains('Open Practice App').should('be.visible').and('not.be.disabled').click();
    },

    /**
     * Verify mobile responsiveness
     */
    verifyMobileView() {
        cy.viewport('iphone-x');
        basePage.getElement(selectors.mainHeading).should('be.visible');
        basePage.getElement(selectors.projectCard).should('be.visible');
    }
};

export default practiceLabPage;