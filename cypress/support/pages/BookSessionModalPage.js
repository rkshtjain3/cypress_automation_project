import basePage from './BasePage';

// Selectors
const selectors = {
    // Modal elements
    bookingModal: '[data-testid="booking-modal"]',
    modalTitle: ':contains("Ready to Start Your Testing Career?")',
    closeButton: ':contains("Close")',
    
    // Trigger buttons
    heroBookButton: ':contains("Get Started - Book Free Demo")',
    contactBookButton: ':contains("Book Free Session")',
    
    // Contact options
    whatsappButton: ':contains("WhatsApp Chat")',
    whatsappLink: 'a[href*="wa.me"]',
    callButton: ':contains("Direct Call")',
    callLink: 'a[href*="tel:"]',
    phoneNumber: ':contains("+91 8709972513")',
    
    // Modal content
    availableHours: ':contains("Available Hours")',
    weekdaysInfo: ':contains("Monday - Friday")',
    weekendsInfo: ':contains("Saturday - Sunday")',
    responseTime: ':contains("We typically respond within 30 minutes")',
    
    // Contact section
    contactSection: '#contact'
};

// Page Object
const bookSessionModalPage = {
    /**
     * Click Book Free Demo button in hero section
     */
    clickHeroBookButton() {
        basePage.contains('Get Started - Book Free Demo').click();
    },

    /**
     * Click Book Free Session button in contact section
     */
    clickContactBookButton() {
        basePage.getElement(selectors.contactSection).scrollIntoView();
        basePage.contains('Book Free Session').click();
    },

    /**
     * Verify modal is visible
     */
    verifyModalVisible() {
        basePage.getElement(selectors.bookingModal).should('be.visible');
        basePage.contains('Ready to Start Your Testing Career?').should('be.visible');
    },

    /**
     * Verify modal is not visible
     */
    verifyModalNotVisible() {
        basePage.getElement(selectors.bookingModal).should('not.exist');
    },

    /**
     * Verify contact options in modal
     */
    verifyContactOptions() {
        basePage.contains('WhatsApp Chat').should('be.visible');
        basePage.contains('Direct Call').should('be.visible');
        basePage.contains('Available Hours').should('be.visible');
        basePage.contains('+91 8709972513').should('be.visible');
    },

    /**
     * Verify WhatsApp link functionality
     */
    verifyWhatsAppLink() {
        basePage.getElement(selectors.whatsappLink)
            .should('have.attr', 'href')
            .and('include', 'wa.me');
    },

    /**
     * Verify phone call link functionality
     */
    verifyCallLink() {
        basePage.getElement(selectors.callLink)
            .should('have.attr', 'href')
            .and('include', 'tel:');
    },

    /**
     * Close modal using close button
     */
    closeModal() {
        basePage.contains('Close').click();
    },

    /**
     * Close modal using ESC key
     */
    closeModalWithEsc() {
        cy.get('body').type('{esc}');
    },

    /**
     * Close modal by clicking outside
     */
    closeModalByClickingOutside() {
        cy.get('.fixed.inset-0').click({ force: true });
    },

    /**
     * Verify available hours information
     */
    verifyAvailableHours() {
        basePage.contains('Weekdays').should('be.visible');
        basePage.contains('Monday - Friday').should('be.visible');
        basePage.contains('10:00 AM - 8:00 PM').should('be.visible');
        basePage.contains('Weekends').should('be.visible');
        basePage.contains('Saturday - Sunday').should('be.visible');
        basePage.contains('10:00 AM - 6:00 PM').should('be.visible');
    },

    /**
     * Verify response time information
     */
    verifyResponseTime() {
        basePage.contains('We typically respond within 30 minutes').should('be.visible');
    },

    /**
     * Verify modal accessibility
     */
    verifyAccessibility() {
        cy.get('[role="dialog"]').should('exist');
        basePage.getElement(selectors.whatsappLink).should('be.focusable');
        basePage.getElement(selectors.callLink).should('be.focusable');
        basePage.contains('Close').should('be.focusable');
    },

    /**
     * Test mobile responsiveness
     */
    testMobileView() {
        cy.viewport('iphone-x');
        this.clickHeroBookButton();
        this.verifyModalVisible();
        basePage.contains('Close').should('be.visible');
        this.closeModal();
    }
};

export default bookSessionModalPage;