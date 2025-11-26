/**
 * TestPro AI - Homepage Availability Tests
 * 
 * Testing availability of testproai.com using HTTP requests
 * This avoids client-side hydration errors while verifying the site is up
 */

describe('TestPro AI - Homepage Availability', { tags: ['@testpro', '@smoke'] }, () => {

    it('should be available (Status 200)', () => {
        cy.request('https://testproai.com').then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('should have correct content type', () => {
        cy.request('https://testproai.com').then((response) => {
            expect(response.headers['content-type']).to.include('text/html');
        });
    });

    it('should contain TestPro branding in response', () => {
        cy.request('https://testproai.com').then((response) => {
            expect(response.body).to.include('TestPro');
        });
    });

    it('should load within acceptable time', () => {
        const startTime = new Date().getTime();
        cy.request('https://testproai.com').then(() => {
            const duration = new Date().getTime() - startTime;
            expect(duration).to.be.lessThan(5000); // Should load under 5s
        });
    });
});
