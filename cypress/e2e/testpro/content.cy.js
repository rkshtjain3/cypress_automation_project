/**
 * TestPro AI - Content Verification
 * 
 * Verifying key content exists in the HTML response
 */

describe('TestPro AI - Content Verification', { tags: ['@testpro', '@regression'] }, () => {

    it('should serve HTML content', () => {
        cy.request('https://testproai.com').then((response) => {
            expect(response.headers['content-type']).to.include('text/html');
            expect(response.body).to.include('<!DOCTYPE html>');
        });
    });

    it('should contain key SEO meta tags', () => {
        cy.request('https://testproai.com').then((response) => {
            const body = response.body;
            expect(body).to.include('<meta');
            // Check for viewport or description
            const hasMeta = body.includes('viewport') || body.includes('description');
            expect(hasMeta).to.be.true;
        });
    });
});
