import basePage from './BasePage';

// Selectors
const selectors = {
    mainSection: 'main',
    internshipSection: 'Internship Program',
    contactSection: '#contact',
    footer: 'footer'
};

// Page Object
const homePage = {
    visitHome() {
        basePage.visit('https://testproai.com');
    },

    verifyMainSection() {
        basePage.getElement(selectors.mainSection).should('exist');
    },

    verifyInternshipSection() {
        basePage.contains(selectors.internshipSection).should('be.visible');
        basePage.contains('3-month hands-on experience').should('be.visible');
    },

    verifyContactSection() {
        basePage.getElement(selectors.contactSection).should('exist');
    },

    verifyFooter() {
        basePage.getElement(selectors.footer).should('exist');
    },

    contains(text) {
        return basePage.contains(text);
    }
};

export default homePage;
