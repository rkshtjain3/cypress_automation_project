import practiceLabPage from '../../support/pages/PracticeLabPage';

describe('TestPro AI - Manual Testing Practice Lab', () => {
  // Handle uncaught exceptions for this test suite
  Cypress.on('uncaught:exception', () => false);
  beforeEach(() => {
    cy.on('uncaught:exception', () => false);
    practiceLabPage.visitPracticeLab();
  });

  describe('Practice Lab Homepage', () => {
    it('should load practice lab homepage successfully', () => {
      cy.url().should('include', '/practice');
      practiceLabPage.verifyHomepage();
    });

    it('should display introduction section', () => {
      practiceLabPage.verifyHomepage();
    });

    it('should show all practice project cards', () => {
      practiceLabPage.verifyProjectCards();
    });

    it('should display difficulty levels correctly', () => {
      practiceLabPage.verifyDifficultyLevels();
    });

    it('should have working Start Practice buttons', () => {
      cy.contains('Start Practice').first().should('be.visible').and('not.be.disabled');
    });

    it('should be mobile responsive', () => {
      practiceLabPage.verifyMobileView();
    });
  });

  describe('Practice Project Navigation', () => {
    it('should navigate to login module detail page', () => {
      practiceLabPage.clickStartPractice('Login Module');
      cy.url().should('include', '/practice/login-module');
      cy.contains('Login Module – Buggy App').should('be.visible');
    });

    it('should navigate to registration module detail page', () => {
      practiceLabPage.clickStartPractice('Registration Module');
      cy.url().should('include', '/practice/registration-module');
      cy.contains('Registration Module – Buggy App').should('be.visible');
    });

    it('should show breadcrumb navigation', () => {
      practiceLabPage.clickStartPractice('Login Module');
      practiceLabPage.verifyBreadcrumb();
    });
  });

  describe('Project Detail Pages', () => {
    beforeEach(() => {
      practiceLabPage.visitPracticeModule('login-module');
    });

    it('should display project overview section', () => {
      practiceLabPage.verifyProjectDetailPage();
      cy.contains('E-commerce platform').should('be.visible');
    });

    it('should display requirements list', () => {
      practiceLabPage.verifyRequirementsList();
    });

    it('should display practice tasks', () => {
      practiceLabPage.verifyProjectDetailPage();
      cy.contains('Perform exploratory testing').should('be.visible');
    });

    it('should have working Launch Practice App button', () => {
      cy.contains('Open Practice App').should('be.visible').and('not.be.disabled');
    });
  });
});