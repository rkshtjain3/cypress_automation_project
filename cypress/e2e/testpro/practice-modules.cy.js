import practiceModulePage from '../../support/pages/PracticeModulePage';

describe('TestPro AI - Practice Module Applications', () => {
  // Handle uncaught exceptions for this test suite
  Cypress.on('uncaught:exception', () => false);

  describe('Login Module Practice App', () => {
    beforeEach(() => {
      practiceModulePage.visitModuleApp('login-module');
    });

    it('should load login practice app', () => {
      cy.contains('ShopEasy Login').should('be.visible');
      cy.get('input[type="text"]').should('be.visible');
      cy.get('input[type="password"]').should('be.visible');
    });

    it('should have show/hide password functionality', () => {
      cy.get('[data-testid="toggle-password-btn"]').click();
      cy.get('input[type="text"]').should('exist');
      cy.get('[data-testid="toggle-password-btn"]').click();
      cy.get('input[type="password"]').should('exist');
    });

    it('should display test credentials', () => {
      cy.contains('test@example.com').should('be.visible');
      cy.contains('password123').should('be.visible');
    });

    it('should handle login attempts', () => {
      cy.get('[data-testid="username-input"]').type('test@example.com');
      cy.get('[data-testid="password-input"]').type('password123');
      cy.get('[data-testid="login-btn"]').click();
      cy.get('[data-testid="login-success"]', { timeout: 10000 }).should('be.visible');
    });

    it('should show error for invalid credentials', () => {
      cy.get('[data-testid="username-input"]').type('invalid@email.com');
      cy.get('[data-testid="password-input"]').type('wrongpass');
      cy.get('[data-testid="login-btn"]').click();
      cy.get('[data-testid="login-error"]').should('be.visible');
    });
  });

  describe('Registration Module Practice App', () => {
    beforeEach(() => {
      practiceModulePage.visitModuleApp('registration-module');
    });

    it('should load registration practice app', () => {
      cy.contains('LearnHub Registration').should('be.visible');
      cy.get('input[name="name"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
    });

    it('should have all required form fields', () => {
      cy.get('input[name="name"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
      cy.get('input[name="phone"]').should('be.visible');
      cy.get('input[name="password"]').should('be.visible');
      cy.get('input[name="confirmPassword"]').should('be.visible');
      cy.get('input[name="dateOfBirth"]').should('be.visible');
      cy.get('input[name="termsAccepted"]').should('be.visible');
    });

    it('should handle form submission', () => {
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('input[name="phone"]').type('1234567890');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password123');
      cy.get('input[name="dateOfBirth"]').type('1990-01-01');
      cy.get('input[name="termsAccepted"]').check();
      cy.get('button[type="submit"]').click();
    });
  });

  describe('Contact Form Practice App', () => {
    beforeEach(() => {
      practiceModulePage.visitModuleApp('contact-form');
    });

    it('should load contact form practice app', () => {
      cy.contains('Customer Support').should('be.visible');
      cy.get('input[name="name"]').should('be.visible');
    });

    it('should have file upload functionality', () => {
      cy.get('input[type="file"]').should('exist');
      cy.contains('Choose Files').should('be.visible');
    });

    it('should have priority and subject dropdowns', () => {
      cy.get('select[name="priority"]').should('be.visible');
      cy.get('select[name="subject"]').should('be.visible');
    });

    it('should handle form reset', () => {
      cy.get('input[name="name"]').type('Test User');
      cy.contains('Clear').click();
      cy.get('input[name="name"]').should('have.value', '');
    });
  });

  describe('Shopping Cart Practice App', () => {
    beforeEach(() => {
      practiceModulePage.visitModuleApp('shopping-cart');
    });

    it('should load shopping cart practice app', () => {
      cy.contains('TechStore').should('be.visible');
      cy.contains('Products').should('be.visible');
      cy.contains('Shopping Cart').should('be.visible');
    });

    it('should display products', () => {
      cy.contains('Wireless Headphones').should('be.visible');
      cy.contains('Smartphone').should('be.visible');
      cy.contains('Laptop').should('be.visible');
    });

    it('should add products to cart', () => {
      cy.contains('Wireless Headphones').parent().contains('Add to Cart').click();
      cy.contains('Shopping Cart (1)').should('be.visible');
    });

    it('should calculate totals', () => {
      cy.contains('Wireless Headphones').parent().contains('Add to Cart').click();
      cy.contains('Subtotal:').should('be.visible');
      cy.contains('Tax').should('be.visible');
      cy.contains('Total:').should('be.visible');
    });
  });

  describe('Search & Filter Practice App', () => {
    beforeEach(() => {
      practiceModulePage.visitModuleApp('search-filter');
    });

    it('should load search and filter practice app', () => {
      cy.contains('BookStore').should('be.visible');
      cy.get('input[placeholder*="Search"]').should('be.visible');
    });

    it('should have search functionality', () => {
      cy.get('input[placeholder*="Search"]').type('JavaScript');
      cy.contains('JavaScript Guide').should('be.visible');
    });

    it('should have filter options', () => {
      cy.get('select').first().should('be.visible');
      cy.contains('Sort by').should('be.visible');
    });

    it('should have pagination', () => {
      cy.get('[data-testid="pagination"]').should('be.visible');
    });
  });

  describe('User Profile Practice App', () => {
    beforeEach(() => {
      practiceModulePage.visitModuleApp('user-profile');
    });

    it('should load user profile practice app', () => {
      cy.contains('SocialHub').should('be.visible');
      cy.contains('My Profile').should('be.visible');
    });

    it('should have tabbed interface', () => {
      cy.contains('Profile Info').should('be.visible');
      cy.contains('Password').should('be.visible');
      cy.contains('Privacy').should('be.visible');
      cy.contains('Notifications').should('be.visible');
    });

    it('should switch between tabs', () => {
      cy.contains('Password').click();
      cy.contains('Change Password').should('be.visible');
      cy.contains('Privacy').click();
      cy.contains('Privacy Settings').should('be.visible');
    });

    it('should have profile picture upload', () => {
      cy.get('input[type="file"]').should('exist');
    });
  });

  describe('Booking System Practice App', () => {
    beforeEach(() => {
      practiceModulePage.visitModuleApp('booking-system');
    });

    it('should load booking system practice app', () => {
      cy.contains('HealthCare Clinic').should('be.visible');
      cy.contains('Appointment Booking').should('be.visible');
    });

    it('should have date selection', () => {
      cy.get('input[type="date"]').should('be.visible');
    });

    it('should show time slots when date is selected', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dateString = tomorrow.toISOString().split('T')[0];
      
      cy.get('input[type="date"]').type(dateString);
      cy.contains('Available Time Slots').should('be.visible');
    });

    it('should have booking form', () => {
      cy.get('input[name="patientName"]').should('be.visible');
      cy.get('input[name="phone"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
    });

    it('should display appointments list', () => {
      cy.contains('Your Appointments').should('be.visible');
    });
  });
});