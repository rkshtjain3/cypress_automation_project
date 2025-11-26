import homePage from '../support/pages/HomePage';

describe('Home Page Tests', () => {
    beforeEach(() => {
        homePage.visitHome();
    })

    it('should display the Hero section correctly', () => {
        homePage.verifyMainSection();
        // Checking for main heading if possible, or just visibility of main sections
        homePage.contains('TestPro AI').should('be.visible');
    })

    it('should display all main sections', () => {
        homePage.verifyInternshipSection();
        homePage.verifyContactSection();
        homePage.verifyFooter();
    })
})
