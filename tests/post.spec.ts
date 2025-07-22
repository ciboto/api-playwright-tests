import { expect } from '@playwright/test';
import { pwApi, test } from 'pw-api-plugin';


test.describe('PW API Tests Example - Method POST', () => {
    test('Verify pwApi POST', async ({ request, page }) => {
        // with request body and request headers
        const responsePost = await pwApi.post({ request, page }, `/posts`, 
            {
                data: {
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                },
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        );
        expect(responsePost.status()).toBe(201)
        const responseBodyPost = await responsePost.json()
        expect(responseBodyPost).toHaveProperty('id', 101)
    })
})