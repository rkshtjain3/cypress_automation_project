import basePage from './BasePage';
import { NAVIGATION_LINKS } from '../constants/testData';

// Selectors
const selectors = {
    desktopNav: 'nav.hidden.md\\:flex',
    ctaButtons: 'div.hidden.md\\:flex'
};

// Page Object
const navigationPage = {
    /**
     * Visit home page
     */
    visitHome() {
        basePage.visit('/');  // Uses baseUrl from config
    },

    /**
     * Verify all navigation links
     */
    verifyNavigationLinks() {
        NAVIGATION_LINKS.desktop.forEach(link => {
            cy.verifyLink(link.text, link.url);
        });
    },

    /**
     * Verify CTA buttons
     */
    verifyCTAButtons() {
        NAVIGATION_LINKS.cta.forEach(button => {
            cy.get(selectors.ctaButtons)
                .find('a')
                .contains(button.text)
                .should('have.attr', 'href', button.url);
        });
    },

    /**
     * Click on a navigation link
     * @param {string} linkText - Text of the link
     */
    clickLink(linkText) {
        cy.get(selectors.desktopNav).contains(linkText).click();
    },

    /**
     * Click Courses link
     */
    clickCourses() {
        cy.clickAndVerifyNavigation('Courses', '/courses');
    },

    /**
     * Verify courses page loaded
     */
    verifyCoursesPage() {
        cy.url().should('include', '/courses');
        cy.get('h1').should('exist');
    }
};

export default navigationPage;
