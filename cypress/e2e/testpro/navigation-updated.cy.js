import homePage from '../../support/pages/HomePage';
import practiceLabPage from '../../support/pages/PracticeLabPage';

describe('TestPro AI - Navigation Tests', () => {
  beforeEach(() => {
    homePage.visitHome();
  });

  describe('Main Navigation', () => {
    it('should have all main navigation links', () => {
      cy.get('nav').within(() => {
        cy.contains('Home').should('be.visible');
        cy.contains('Courses').should('be.visible');
        cy.contains('Practice').should('be.visible');
        cy.contains('Career Switch').should('be.visible');
        cy.contains('Interview Prep').should('be.visible');
        cy.contains('Blog').should('be.visible');
        cy.contains('About').should('be.visible');
      });
    });

    it('should navigate to courses page', () => {
      cy.contains('Courses').click();
      cy.url().should('include', '/courses');
    });

    it('should navigate to practice lab', () => {
      cy.contains('Practice').click();
      cy.url().should('include', '/practice');
      cy.contains('Manual Testing Practice Lab').should('be.visible');
    });

    it('should navigate to about page', () => {
      cy.contains('About').click();
      cy.url().should('include', '/about');
    });

    it('should navigate to blog page', () => {
      cy.contains('Blog').click();
      cy.url().should('include', '/blog');
    });

    it('should have working logo link', () => {
      cy.contains('Practice').click(); // Navigate away from home
      cy.get('header').contains('TestPro AI').click();
      cy.url().should('include', '/');
    });
  });

  describe('Mobile Navigation', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
    });

    it('should show mobile menu button', () => {
      cy.get('[data-testid="mobile-menu-button"]').should('be.visible');
    });

    it('should open mobile menu when clicked', () => {
      cy.get('button').contains('☰').click();
      cy.get('[data-testid="mobile-menu"]').should('be.visible');
    });

    it('should navigate from mobile menu', () => {
      cy.get('button').contains('☰').click();
      cy.get('[data-testid="mobile-menu"]').contains('Practice Testing').click();
      cy.url().should('include', '/practice');
    });
  });

  describe('Practice Lab Navigation', () => {
    beforeEach(() => {
      practiceLabPage.visitPracticeLab();
    });

    it('should show breadcrumb navigation', () => {
      practiceLabPage.clickStartPractice('Login Module');
      practiceLabPage.verifyBreadcrumb();
    });

    it('should navigate back to practice home from breadcrumb', () => {
      practiceLabPage.clickStartPractice('Login Module');
      cy.get('nav').contains('Practice').click();
      cy.url().should('include', '/practice');
      cy.contains('Manual Testing Practice Lab').should('be.visible');
    });

    it('should navigate to home from breadcrumb', () => {
      practiceLabPage.clickStartPractice('Login Module');
      cy.get('nav').contains('Home').click();
      cy.url().should('include', '/');
    });
  });

  describe('Footer Navigation', () => {
    it('should have footer links', () => {
      cy.get('footer').scrollIntoView();
      cy.get('footer').should('be.visible');
    });

    it('should navigate to privacy policy', () => {
      cy.get('footer').scrollIntoView();
      cy.get('footer').contains('Privacy Policy').click();
      cy.url().should('include', '/privacy-policy');
    });

    it('should navigate to terms of service', () => {
      cy.get('footer').scrollIntoView();
      cy.get('footer').contains('Terms of Service').click();
      cy.url().should('include', '/terms-of-service');
    });
  });

  describe('Call-to-Action Navigation', () => {
    it('should have working CTA buttons in header', () => {
      cy.contains('Hire Testers').should('be.visible');
      cy.contains('Join Now').should('be.visible');
    });

    it('should navigate to hire page', () => {
      cy.contains('Hire Testers').click();
      cy.url().should('include', '/hire');
    });

    it('should navigate to get started page', () => {
      cy.contains('Join Now').click();
      cy.url().should('include', '/get-started');
    });
  });
});