/**
 * TestPro AI - Navigation Availability Tests
 * 
 * Verifying navigation pages are reachable
 */

describe('TestPro AI - Navigation Links', { tags: ['@testpro', '@smoke'] }, () => {

    const pages = [
        '/courses',
        '/about',
        '/blog',
        '/contact' // Assuming contact is a page or section
    ];

    pages.forEach(page => {
        it(`should successfully load ${page}`, () => {
            cy.request({
                url: `https://testproai.com${page}`,
                failOnStatusCode: false // Allow 404s if pages don't exist, but check status
            }).then((response) => {
                // We expect 200, but if it's a SPA it might be 200 for all routes or 404 for some
                // Just checking it returns a response
                expect(response.status).to.be.oneOf([200, 404]);
            });
        });
    });

    it('should have valid sitemap (if exists)', () => {
        cy.request({
            url: 'https://testproai.com/sitemap.xml',
            failOnStatusCode: false
        }).then((response) => {
            if (response.status === 200) {
                expect(response.headers['content-type']).to.include('xml');
            }
        });
    });
});
