import basePage from './BasePage';

// Selectors
const selectors = {
    desktopNav: 'nav.hidden.md\\:flex',
    ctaButtons: 'div.hidden.md\\:flex'
};

// Page Object
const navigationPage = {
    visitHome() {
        basePage.visit('https://testproai.com');
    },

    verifyNavigationLinks() {
        cy.get(selectors.desktopNav).within(() => {
            cy.contains('Home').should('have.attr', 'href', '/');
            cy.contains('Courses').should('have.attr', 'href', '/courses');
            cy.contains('Practice').should('have.attr', 'href', '/practice');
            cy.contains('Career Switch').should('have.attr', 'href', '/career-switch');
            cy.contains('Interview Prep').should('have.attr', 'href', '/interview-preparation');
            cy.contains('Blog').should('have.attr', 'href', '/blog');
            cy.contains('About').should('have.attr', 'href', '/about');
            cy.contains('Internship').should('have.attr', 'href', '/internship');
            cy.contains('Get Hired').should('have.attr', 'href', '/get-hired');
        });
    },

    verifyCTAButtons() {
        cy.get(selectors.ctaButtons).within(() => {
            cy.contains('Hire Testers').should('have.attr', 'href', '/hire');
            cy.contains('Join Now').should('have.attr', 'href', '/get-started');
        });
    },

    clickCourses() {
        cy.get(selectors.desktopNav).contains('Courses').click();
    },

    verifyCoursesPage() {
        cy.url().should('include', '/courses');
        cy.get('h1').should('exist');
    }
};

export default navigationPage;
