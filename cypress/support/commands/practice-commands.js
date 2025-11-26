// Custom commands for Practice Lab testing

Cypress.Commands.add('navigateToPracticeModule', (moduleName) => {
  cy.visit('/practice');
  cy.contains(moduleName).parent().contains('Start Practice').click();
});

Cypress.Commands.add('launchPracticeApp', (moduleName) => {
  cy.navigateToPracticeModule(moduleName);
  cy.contains('Open Practice App').click();
});

Cypress.Commands.add('openBookingModal', (buttonText = 'Get Started - Book Free Demo') => {
  cy.contains(buttonText).click();
  cy.get('[data-testid="booking-modal"]').should('be.visible');
});

Cypress.Commands.add('closeBookingModal', () => {
  cy.contains('Close').click();
  cy.get('[data-testid="booking-modal"]').should('not.exist');
});

Cypress.Commands.add('testLoginModule', (email, password) => {
  cy.get('[data-testid="username-input"]').type(email);
  cy.get('[data-testid="password-input"]').type(password);
  cy.get('[data-testid="login-btn"]').click();
});

Cypress.Commands.add('fillRegistrationForm', (userData) => {
  cy.get('input[name="name"]').type(userData.name);
  cy.get('input[name="email"]').type(userData.email);
  cy.get('input[name="phone"]').type(userData.phone);
  cy.get('input[name="password"]').type(userData.password);
  cy.get('input[name="confirmPassword"]').type(userData.confirmPassword);
  cy.get('input[name="dateOfBirth"]').type(userData.dateOfBirth);
  if (userData.acceptTerms) {
    cy.get('input[name="termsAccepted"]').check();
  }
});

Cypress.Commands.add('addToCart', (productName) => {
  cy.contains(productName).parent().contains('Add to Cart').click();
});

Cypress.Commands.add('searchBooks', (searchTerm) => {
  cy.get('input[placeholder*="Search"]').type(searchTerm);
});

Cypress.Commands.add('bookAppointment', (appointmentData) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateString = tomorrow.toISOString().split('T')[0];
  
  cy.get('input[type="date"]').type(dateString);
  cy.get('button').contains('09:00').click();
  cy.get('input[name="patientName"]').type(appointmentData.name);
  cy.get('input[name="phone"]').type(appointmentData.phone);
  cy.get('input[name="email"]').type(appointmentData.email);
  cy.get('textarea[name="reason"]').type(appointmentData.reason);
});

Cypress.Commands.add('switchProfileTab', (tabName) => {
  cy.contains(tabName).click();
});

Cypress.Commands.add('uploadProfilePicture', (fileName) => {
  cy.get('input[type="file"]').selectFile(`cypress/fixtures/${fileName}`, { force: true });
});

Cypress.Commands.add('verifyModalAccessibility', () => {
  cy.get('[role="dialog"]').should('exist');
  cy.get('body').type('{esc}');
  cy.get('[data-testid="booking-modal"]').should('not.exist');
});

Cypress.Commands.add('testResponsiveDesign', (selector) => {
  const viewports = ['iphone-x', 'ipad-2', [1920, 1080]];
  
  viewports.forEach(viewport => {
    cy.viewport(viewport);
    cy.get(selector).should('be.visible');
  });
});

Cypress.Commands.add('verifyPracticeModuleBugs', (moduleName, expectedBugCount) => {
  cy.navigateToPracticeModule(moduleName);
  cy.contains('Practice Tasks').should('be.visible');
  cy.contains(`find and document all ${expectedBugCount} bugs`, { matchCase: false }).should('be.visible');
});

Cypress.Commands.add('testFormValidation', (formSelector, fieldData) => {
  Object.keys(fieldData).forEach(field => {
    cy.get(`${formSelector} input[name="${field}"]`).type(fieldData[field]);
  });
  cy.get(`${formSelector} button[type="submit"]`).click();
});

Cypress.Commands.add('verifyContactOptions', () => {
  cy.contains('WhatsApp Chat').should('be.visible');
  cy.contains('Direct Call').should('be.visible');
  cy.contains('+91 8709972513').should('be.visible');
  cy.contains('Available Hours').should('be.visible');
});

Cypress.Commands.add('testPracticeAppFeatures', (moduleName, features) => {
  cy.launchPracticeApp(moduleName);
  
  features.forEach(feature => {
    cy.get(feature.selector).should(feature.assertion, feature.value);
  });
});