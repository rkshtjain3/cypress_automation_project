import navigationPage from '../support/pages/NavigationPage';

describe('Header Navigation - Regression Tests', { tags: ['@smoke', '@navigation'] }, () => {

    beforeEach(() => {
        // Arrange: Navigate to home
        navigationPage.visitHome();
    })

    context('Desktop Navigation', () => {

        it('should display all navigation links with correct URLs', () => {
            // Assert: Verify navigation links
            navigationPage.verifyNavigationLinks();
        })

        it('should have CTA buttons with correct links', () => {
            // Assert: Verify CTA buttons
            navigationPage.verifyCTAButtons();
        })
    })
})
