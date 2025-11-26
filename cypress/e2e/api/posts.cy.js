/**
 * API Tests - JSONPlaceholder
 * 
 * Testing against a free public API to demonstrate API testing capabilities
 * API: https://jsonplaceholder.typicode.com
 */

describe('API Tests - JSONPlaceholder Posts', { tags: ['@api', '@smoke'] }, () => {

    const baseUrl = 'https://jsonplaceholder.typicode.com';

    context('GET Requests', () => {

        it('should get all posts successfully', () => {
            cy.request({
                method: 'GET',
                url: `${baseUrl}/posts`
            }).then((response) => {
                // Assert status code
                expect(response.status).to.eq(200);

                // Assert response is an array
                expect(response.body).to.be.an('array');

                // Assert array has items
                expect(response.body.length).to.be.greaterThan(0);

                // Assert first post has required properties
                expect(response.body[0]).to.have.property('id');
                expect(response.body[0]).to.have.property('title');
                expect(response.body[0]).to.have.property('body');
                expect(response.body[0]).to.have.property('userId');
            });
        });

        it('should get a specific post by ID', () => {
            const postId = 1;

            cy.request({
                method: 'GET',
                url: `${baseUrl}/posts/${postId}`
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', postId);
                expect(response.body.title).to.not.be.empty;
                expect(response.body.body).to.not.be.empty;
            });
        });

        it('should return 404 for non-existent post', () => {
            cy.request({
                method: 'GET',
                url: `${baseUrl}/posts/9999`,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(404);
            });
        });
    });

    context('POST Requests', () => {

        it('should create a new post', () => {
            const newPost = {
                title: 'Test Post from Cypress',
                body: 'This is a test post created via Cypress automation',
                userId: 1
            };

            cy.request({
                method: 'POST',
                url: `${baseUrl}/posts`,
                body: newPost
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('id');
                expect(response.body.title).to.eq(newPost.title);
                expect(response.body.body).to.eq(newPost.body);
                expect(response.body.userId).to.eq(newPost.userId);
            });
        });
    });

    context('PUT Requests', () => {

        it('should update an existing post', () => {
            const updatedPost = {
                id: 1,
                title: 'Updated Title',
                body: 'Updated body content',
                userId: 1
            };

            cy.request({
                method: 'PUT',
                url: `${baseUrl}/posts/1`,
                body: updatedPost
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.title).to.eq(updatedPost.title);
                expect(response.body.body).to.eq(updatedPost.body);
            });
        });
    });

    context('DELETE Requests', () => {

        it('should delete a post', () => {
            cy.request({
                method: 'DELETE',
                url: `${baseUrl}/posts/1`
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });
});
