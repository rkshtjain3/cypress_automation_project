import practiceLabPage from '../../support/pages/PracticeLabPage';
import practiceModulePage from '../../support/pages/PracticeModulePage';
import homePage from '../../support/pages/HomePage';

describe('TestPro AI - End-to-End User Journey', () => {
  // Handle uncaught exceptions for this test suite
  Cypress.on('uncaught:exception', () => false);

  describe('Student Practice Journey', () => {
    it('should complete full practice lab journey', () => {
      // Start from homepage
      homePage.visitHome();
      cy.contains('Software Testing Career').should('be.visible');

      // Navigate to practice lab
      cy.contains('Practice').click();
      cy.url().should('include', '/practice');
      practiceLabPage.verifyHomepage();

      // Select a practice module
      practiceLabPage.clickStartPractice('Login Module');
      cy.url().should('include', '/practice/login-module');

      // View project details
      practiceLabPage.verifyProjectDetailPage();

      // Launch practice app
      cy.contains('Open Practice App').click();
      cy.url().should('include', '/practice/login-module/app');
      cy.contains('ShopEasy Login').should('be.visible');

      // Test the practice app
      cy.get('input[data-testid="username-input"]').type('test@example.com');
      cy.get('input[data-testid="password-input"]').type('password123');
      cy.get('button[data-testid="login-btn"]').click();
      cy.get('[data-testid="login-success"]', { timeout: 10000 }).should('be.visible');
    });

    it('should navigate through multiple practice modules', () => {
      practiceLabPage.visitPracticeLab();

      // Test Login Module
      practiceLabPage.clickStartPractice('Login Module');
      cy.contains('Login Module – Buggy App').should('be.visible');
      cy.go('back');

      // Test Registration Module
      practiceLabPage.clickStartPractice('Registration Module');
      cy.contains('Registration Module – Buggy App').should('be.visible');
      cy.go('back');

      // Test Contact Form
      practiceLabPage.clickStartPractice('Contact Form');
      cy.contains('Contact Form – Buggy App').should('be.visible');
    });
  });

  describe('Prospective Student Journey', () => {
    it('should complete inquiry to booking journey', () => {
      // Start from homepage
      homePage.visitHome();

      // Click Book Free Demo button
      cy.contains('Get Started - Book Free Demo').click();
      cy.contains('Ready to Start Your Testing Career?').should('be.visible');

      // Verify contact options
      cy.contains('WhatsApp Chat').should('be.visible');
      cy.contains('Direct Call').should('be.visible');
      cy.contains('+91 8709972513').should('be.visible');

      // Close modal
      cy.contains('Close').click();

      // Navigate to courses
      cy.contains('Courses').click();
      cy.url().should('include', '/courses');

      // Navigate to about page
      cy.contains('About').click();
      cy.url().should('include', '/about');

      // Try contact form
      cy.visit(baseUrl);
      cy.get('#contact').scrollIntoView();
      cy.contains('Book Free Session').click();
      cy.contains('WhatsApp Chat').should('be.visible');
    });
  });

  describe('Employer Journey', () => {
    it('should navigate employer-focused sections', () => {
      homePage.visitHome();

      // Click Hire Our Graduates
      cy.contains('Hire Our Graduates').click();
      cy.url().should('include', '/hire');

      // Navigate to internship program
      homePage.visitHome();
      cy.contains('Explore Program').click();
      cy.url().should('include', '/internship');

      // Check get hired section
      homePage.visitHome();
      cy.contains('Get Hired').click();
      cy.url().should('include', '/get-hired');
    });
  });

  describe('Cross-Platform Compatibility', () => {
    const viewports = [
      { device: 'Desktop', width: 1920, height: 1080 },
      { device: 'Tablet', width: 768, height: 1024 },
      { device: 'Mobile', width: 375, height: 667 }
    ];

    viewports.forEach(viewport => {
      it(`should work on ${viewport.device}`, () => {
        cy.viewport(viewport.width, viewport.height);
        homePage.visitHome();

        // Test main navigation
        cy.get('h1').should('be.visible');
        cy.contains('Software Testing Career').should('be.visible');

        // Test practice lab access
        cy.contains('Practice').click();
        cy.contains('Manual Testing Practice Lab').should('be.visible');

        // Test modal functionality
        homePage.visitHome();
        cy.contains('Get Started - Book Free Demo').click();
        cy.contains('Ready to Start Your Testing Career?').should('be.visible');
        cy.contains('Close').should('be.visible').click();
      });
    });
  });

  describe('Performance and Accessibility', () => {
    it('should load pages within acceptable time', () => {
      const pages = [
        '/',
        '/practice',
        '/courses',
        '/about',
        '/blog'
      ];

      pages.forEach(page => {
        const startTime = Date.now();
        cy.visit(page);
        cy.get('h1').should('be.visible').then(() => {
          const loadTime = Date.now() - startTime;
          expect(loadTime).to.be.lessThan(5000); // Should load under 5 seconds
        });
      });
    });

    it('should have proper heading hierarchy', () => {
      homePage.visitHome();
      cy.get('h1').should('have.length', 1);
      cy.get('h2').should('have.length.greaterThan', 0);
    });

    it('should have alt text for images', () => {
      homePage.visitHome();
      cy.get('img').each($img => {
        cy.wrap($img).should('have.attr', 'alt');
      });
    });

    it('should be keyboard navigable', () => {
      homePage.visitHome();
      cy.get('body').tab();
      cy.focused().should('be.visible');
    });
  });

  describe('Error Handling', () => {
    it('should handle 404 pages gracefully', () => {
      cy.visit('/non-existent-page', { failOnStatusCode: false });
      cy.contains('404').should('be.visible');
    });

    it('should handle invalid practice module routes', () => {
      cy.visit('/practice/invalid-module', { failOnStatusCode: false });
      cy.contains('404').should('be.visible');
    });
  });
});