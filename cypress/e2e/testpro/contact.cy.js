/**
 * TestPro AI - Contact Page Availability
 * 
 * Verifying contact page/section availability
 */

describe('TestPro AI - Contact Availability', { tags: ['@testpro', '@regression'] }, () => {

    it('should load contact page/section', () => {
        cy.request({
            url: 'https://testproai.com',
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Check for contact related keywords in the home page source
            // since it's likely a single page app or section
            const body = response.body.toLowerCase();
            const hasContactInfo = body.includes('contact') || body.includes('email') || body.includes('message');
            expect(hasContactInfo).to.be.true;
        });
    });
});
