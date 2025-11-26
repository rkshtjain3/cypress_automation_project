import contactPage from '../support/pages/ContactPage';

describe('Contact Form - Functional Tests', { tags: ['@smoke', '@contact'] }, () => {

    beforeEach(() => {
        // Arrange: Navigate to contact section
        contactPage.visitContact();
    })

    context('Form Field Validation', () => {

        it('should display all required form fields', () => {
            // Assert: Verify form structure
            contactPage.verifyFormFields();
        })

        it('should show validation error when submitting empty form', () => {
            // Act: Try to submit without filling
            contactPage.clickSendMessage();

            // Assert: Verify HTML5 validation
            contactPage.verifyFieldValidity(contactPage.firstNameInput);
            contactPage.verifyFieldValidity(contactPage.emailInput);
        })
    })

    context('Modal Interactions', () => {

        it('should open and close booking modal correctly', () => {
            // Act: Open modal
            contactPage.clickBookFreeSession();

            // Assert: Modal is visible
            contactPage.verifyModalIsVisible();

            // Act: Close modal
            contactPage.closeModal();

            // Assert: Modal is closed
            contactPage.verifyModalIsClosed();
        })
    })
})
