import basePage from './BasePage';
import { TIMEOUTS } from '../constants/timeouts';

// Selectors
const selectors = {
    contactSection: '#contact',
    firstNameInput: 'input[name="firstName"]',
    lastNameInput: 'input[name="lastName"]',
    emailInput: 'input[name="email"]',
    phoneInput: 'input[name="phone"]',
    courseSelect: 'select[name="course"]',
    messageTextarea: 'textarea[name="message"]',
    bookFreeSessionBtn: 'Book Free Session',
    sendMessageBtn: 'Send Message',
    modalTitle: 'Ready to Start Your Testing Career?',
    closeBtn: 'Close',
    successMessage: 'Message sent successfully'
};

// Page Object
const contactPage = {
    // Expose selectors for external use
    get firstNameInput() { return selectors.firstNameInput; },
    get emailInput() { return selectors.emailInput; },

    /**
     * Visit homepage and scroll to contact
     */
    visitContact() {
        basePage.visit('/');  // Uses baseUrl from config
        this.scrollToContact();
    },

    /**
     * Scroll to contact section
     */
    scrollToContact() {
        cy.navigateToSection(selectors.contactSection);
    },

    /**
     * Verify all form fields are visible
     */
    verifyFormFields() {
        basePage.getElement(selectors.firstNameInput).should('be.visible');
        basePage.getElement(selectors.lastNameInput).should('be.visible');
        basePage.getElement(selectors.emailInput).should('be.visible');
        basePage.getElement(selectors.phoneInput).should('be.visible');
        basePage.getElement(selectors.courseSelect).should('be.visible');
        basePage.getElement(selectors.messageTextarea).should('be.visible');
    },

    /**
     * Get first name input element
     */
    getFirstNameInput() {
        return basePage.getElement(selectors.firstNameInput);
    },

    /**
     * Get email input element
     */
    getEmailInput() {
        return basePage.getElement(selectors.emailInput);
    },

    /**
     * Fill contact form
     * @param {object} formData - Form data
     */
    fillContactForm(formData) {
        cy.fillContactForm(formData);
    },

    /**
     * Click Book Free Session button
     */
    clickBookFreeSession() {
        basePage.contains(selectors.bookFreeSessionBtn).click();
    },

    /**
     * Get booking modal
     */
    getBookingModal() {
        return basePage.contains(selectors.modalTitle);
    },

    /**
     * Verify modal is visible
     */
    verifyModalIsVisible() {
        this.getBookingModal().should('be.visible');
    },

    /**
     * Close modal
     */
    closeModal() {
        basePage.contains(selectors.closeBtn).click();
    },

    /**
     * Verify modal is closed
     */
    verifyModalIsClosed() {
        basePage.contains(selectors.modalTitle).should('not.exist');
    },

    /**
     * Click send message button
     */
    clickSendMessage() {
        cy.contains('button', selectors.sendMessageBtn).click();
    },

    /**
     * Get success message element
     */
    getSuccessMessage() {
        return basePage.contains(selectors.successMessage);
    },

    /**
     * Verify field validity
     * @param {string} fieldSelector - Field selector
     */
    verifyFieldValidity(fieldSelector) {
        cy.verifyFieldValidity(fieldSelector);
    }
};

export default contactPage;
