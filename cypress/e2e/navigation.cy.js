import navigationPage from '../support/pages/NavigationPage';

describe('Navigation Tests', () => {
    beforeEach(() => {
        navigationPage.visitHome();
    })

    it('should have correct navigation links in header', () => {
        navigationPage.verifyNavigationLinks();
    })

    it('should have CTA buttons in header', () => {
        navigationPage.verifyCTAButtons();
    })

    it('should navigate to Courses page', () => {
        navigationPage.clickCourses();
        navigationPage.verifyCoursesPage();
    })
})
