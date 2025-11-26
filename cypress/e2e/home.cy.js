import homePage from '../support/pages/HomePage';

describe('Home Page - Functional Tests', { tags: ['@smoke', '@home'] }, () => {

    beforeEach(() => {
        // Arrange: Navigate to home page
        homePage.visitHome();
    })

    context('Page Structure', () => {

        it('should display main section when page loads', () => {
            // Assert: Verify main structure
            homePage.verifyMainSection();
        })

        it('should display all key sections of the homepage', () => {
            // Assert: Verify all sections exist
            homePage.verifyInternshipSection();
            homePage.verifyContactSection();
            homePage.verifyFooter();
        })
    })
})
