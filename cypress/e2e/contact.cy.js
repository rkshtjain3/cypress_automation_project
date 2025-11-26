import contactPage from '../support/pages/ContactPage';

describe('Contact Section Tests', () => {
    beforeEach(() => {
        contactPage.visitContact();
    })

    it('should display contact form fields', () => {
        contactPage.verifyFormFields();
    })

    it('should open booking modal', () => {
        contactPage.clickBookFreeSession();
        contactPage.verifyModalIsVisible();
        contactPage.closeModal();
        contactPage.verifyModalIsClosed();
    })

    it('should validate required fields', () => {
        // Try to submit without filling anything
        contactPage.clickSendMessage();

        // HTML5 validation prevents submission
        contactPage.verifyFieldValidity(contactPage.firstNameInput);
        contactPage.verifyFieldValidity(contactPage.emailInput);
    })
})
