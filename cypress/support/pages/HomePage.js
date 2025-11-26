import basePage from './BasePage';

// Selectors
const selectors = {
    mainSection: 'main',
    internshipSection: 'Internship Program',
    internshipDescription: '3-month hands-on experience',
    contactSection: '#contact',
    footer: 'footer',
    logo: 'TestPro AI'
};

// Page Object
const homePage = {
    /**
     * Visit home page
     */
    visitHome() {
        basePage.visit('/');  // Uses baseUrl from config
    },

    /**
     * Verify main section exists
     */
    verifyMainSection() {
        basePage.getElement(selectors.mainSection).should('be.visible');
    },

    /**
     * Verify logo/brand is visible
     */
    verifyLogo() {
        basePage.contains(selectors.logo).should('be.visible');
    },

    /**
     * Verify internship section
     */
    verifyInternshipSection() {
        basePage.contains(selectors.internshipSection).should('be.visible');
        basePage.contains(selectors.internshipDescription).should('be.visible');
    },

    /**
     * Verify contact section
     */
    verifyContactSection() {
        basePage.getElement(selectors.contactSection).should('exist');
    },

    /**
     * Verify footer
     */
    verifyFooter() {
        basePage.getElement(selectors.footer).should('exist');
    },

    /**
     * Get contains method for flexibility
     */
    contains(text) {
        return basePage.contains(text);
    }
};

export default homePage;
