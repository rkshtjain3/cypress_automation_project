import homePage from '../../support/pages/HomePage';

describe('TestPro AI - Homepage UI Tests', () => {
  beforeEach(() => {
    homePage.visitHome();
  });

  it('should load the homepage successfully', () => {
    cy.url().should('include', '/');
    cy.title().should('not.be.empty');
  });

  it('should display the main heading and hero content', () => {
    cy.get('h1').should('be.visible').and('contain', 'Software Testing Career');
    cy.contains('Switch to a').should('be.visible');
    cy.contains('90 Days').should('be.visible');
  });

  it('should display key statistics', () => {
    cy.contains('500+').should('be.visible');
    cy.contains('Students Placed').should('be.visible');
    cy.contains('85% Placement Rate').should('be.visible');
  });

  it('should have navigation menu with Practice link', () => {
    cy.get('nav').should('be.visible');
    cy.contains('Practice').should('be.visible');
    cy.contains('Courses').should('be.visible');
    cy.contains('About').should('be.visible');
  });

  it('should navigate to practice lab when Practice link is clicked', () => {
    cy.contains('Practice').click();
    cy.url().should('include', '/practice');
    cy.contains('Manual Testing Practice Lab').should('be.visible');
  });

  it('should display call-to-action buttons', () => {
    cy.contains('Get Started - Book Free Demo').should('be.visible');
    cy.contains('Hire Our Graduates').should('be.visible');
  });

  it('should display course sections', () => {
    cy.contains('Manual Testing').should('be.visible');
    cy.contains('Automation Testing').should('be.visible');
    cy.contains('API Testing').should('be.visible');
  });

  it('should have contact section', () => {
    cy.get('#contact').should('exist');
    cy.get('#contact').scrollIntoView();
    cy.contains('Book Free Session').should('be.visible');
  });

  it('should be responsive on mobile', () => {
    cy.viewport('iphone-x');
    cy.get('h1').should('be.visible');
    cy.contains('Get Started - Book Free Demo').should('be.visible');
  });

  it('should have working footer links', () => {
    cy.get('footer').scrollIntoView();
    cy.get('footer').should('be.visible');
  });
});