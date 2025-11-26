import homePage from '../../support/pages/HomePage';
import bookSessionModalPage from '../../support/pages/BookSessionModalPage';

describe('TestPro AI - Book Free Session Modal', () => {
  // Handle uncaught exceptions for this test suite
  Cypress.on('uncaught:exception', () => false);
  beforeEach(() => {
    cy.on('uncaught:exception', () => false);
    homePage.visitHome();
  });

  describe('Hero Section Book Free Demo Button', () => {
    it('should display Book Free Demo button in hero section', () => {
      cy.contains('Get Started - Book Free Demo').should('be.visible');
    });

    it('should open modal when Book Free Demo button is clicked', () => {
      bookSessionModalPage.clickHeroBookButton();
      bookSessionModalPage.verifyModalVisible();
    });

    it('should display contact options in modal', () => {
      bookSessionModalPage.clickHeroBookButton();
      bookSessionModalPage.verifyContactOptions();
    });

    it('should have working WhatsApp link', () => {
      bookSessionModalPage.clickHeroBookButton();
      bookSessionModalPage.verifyWhatsAppLink();
    });

    it('should have working phone call link', () => {
      bookSessionModalPage.clickHeroBookButton();
      bookSessionModalPage.verifyCallLink();
    });

    it('should close modal when close button is clicked', () => {
      bookSessionModalPage.clickHeroBookButton();
      bookSessionModalPage.closeModal();
      bookSessionModalPage.verifyModalNotVisible();
    });

    it('should be mobile responsive', () => {
      bookSessionModalPage.testMobileView();
    });
  });

  describe('Contact Section Book Free Session Button', () => {
    it('should scroll to contact section and find Book Free Session button', () => {
      cy.get('#contact').scrollIntoView();
      cy.contains('Book Free Session').should('be.visible');
    });

    it('should open modal when Book Free Session button is clicked', () => {
      bookSessionModalPage.clickContactBookButton();
      bookSessionModalPage.verifyModalVisible();
    });

    it('should display same modal content as hero section', () => {
      bookSessionModalPage.clickContactBookButton();
      bookSessionModalPage.verifyContactOptions();
    });
  });

  describe('Modal Functionality', () => {
    beforeEach(() => {
      bookSessionModalPage.clickHeroBookButton();
    });

    it('should display available hours correctly', () => {
      bookSessionModalPage.verifyAvailableHours();
    });

    it('should display response time information', () => {
      bookSessionModalPage.verifyResponseTime();
    });

    it('should close modal when clicking outside', () => {
      bookSessionModalPage.closeModalByClickingOutside();
      bookSessionModalPage.verifyModalNotVisible();
    });

    it('should handle keyboard navigation', () => {
      bookSessionModalPage.closeModalWithEsc();
      bookSessionModalPage.verifyModalNotVisible();
    });
  });

  describe('Modal Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      bookSessionModalPage.clickHeroBookButton();
      bookSessionModalPage.verifyAccessibility();
    });

    it('should trap focus within modal', () => {
      bookSessionModalPage.clickHeroBookButton();
      bookSessionModalPage.verifyAccessibility();
    });

    it('should return focus to trigger button when closed', () => {
      cy.contains('Get Started - Book Free Demo').focus().click();
      bookSessionModalPage.closeModal();
      cy.contains('Get Started - Book Free Demo').should('be.focused');
    });
  });

  describe('Cross-browser Compatibility', () => {
    it('should work in different viewport sizes', () => {
      // Desktop
      cy.viewport(1920, 1080);
      bookSessionModalPage.clickHeroBookButton();
      bookSessionModalPage.verifyModalVisible();
      bookSessionModalPage.closeModal();

      // Tablet
      cy.viewport('ipad-2');
      bookSessionModalPage.clickHeroBookButton();
      bookSessionModalPage.verifyModalVisible();
      bookSessionModalPage.closeModal();

      // Mobile
      cy.viewport('iphone-se2');
      bookSessionModalPage.clickHeroBookButton();
      bookSessionModalPage.verifyModalVisible();
      cy.contains('Close').should('be.visible');
    });
  });
});