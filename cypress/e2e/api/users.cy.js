/**
 * API Tests - JSONPlaceholder Users
 * 
 * Testing user-related endpoints
 */

describe('API Tests - JSONPlaceholder Users', { tags: ['@api', '@regression'] }, () => {

    const baseUrl = 'https://jsonplaceholder.typicode.com';

    it('should get all users', () => {
        cy.request(`${baseUrl}/users`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            expect(response.body.length).to.be.greaterThan(0);

            // Validate user structure
            const user = response.body[0];
            expect(user).to.have.property('id');
            expect(user).to.have.property('name');
            expect(user).to.have.property('email');
            expect(user).to.have.property('address');

            // Validate email format
            expect(user.email).to.match(/@/);
        });
    });

    it('should get user posts', () => {
        const userId = 1;

        cy.request(`${baseUrl}/users/${userId}/posts`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');

            // All posts should belong to the user
            response.body.forEach(post => {
                expect(post.userId).to.eq(userId);
            });
        });
    });

    it('should validate response headers', () => {
        cy.request(`${baseUrl}/users`).then((response) => {
            expect(response.headers).to.have.property('content-type');
            expect(response.headers['content-type']).to.include('application/json');
        });
    });
});
