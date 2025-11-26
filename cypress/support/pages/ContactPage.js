import basePage from './BasePage';

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
    sendMessageBtn: 'button',
    modalTitle: 'Ready to Start Your Testing Career?',
    closeBtn: 'Close'
};

// Page Object
const contactPage = {
    // Expose selectors for external use
    ...selectors,

    visitContact() {
        basePage.visit('https://testproai.com');
        this.scrollToContact();
    },

    scrollToContact() {
        basePage.getElement(selectors.contactSection).scrollIntoView();
    },

    verifyFormFields() {
        basePage.getElement(selectors.firstNameInput).should('be.visible');
        basePage.getElement(selectors.lastNameInput).should('be.visible');
        basePage.getElement(selectors.emailInput).should('be.visible');
        basePage.getElement(selectors.phoneInput).should('be.visible');
        basePage.getElement(selectors.courseSelect).should('be.visible');
        basePage.getElement(selectors.messageTextarea).should('be.visible');
    },

    clickBookFreeSession() {
        basePage.contains(selectors.bookFreeSessionBtn).click();
    },

    verifyModalIsVisible() {
        basePage.contains(selectors.modalTitle).should('be.visible');
    },

    closeModal() {
        basePage.contains(selectors.closeBtn).click();
    },

    verifyModalIsClosed() {
        basePage.contains(selectors.modalTitle).should('not.exist');
    },

    clickSendMessage() {
        cy.contains('button', 'Send Message').click();
    },

    verifyFieldValidity(fieldSelector) {
        basePage.getElement(fieldSelector).then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
        });
    }
};

export default contactPage;
