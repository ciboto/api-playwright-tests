import { expect } from '@playwright/test';
import { pwApi, test } from 'pw-api-plugin';


test.describe('PW API Tests Example - Method PATCH', () => {
    test('Verify pwApi PATCH', async ({ request, page }) => {
        // with request body and request headers
        const responsePatch = await pwApi.patch({ request, page }, 'https://jsonplaceholder.typicode.com/posts/1',
            {
                data: {
                    title: 'hello',
                },
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        );
        expect(responsePatch.ok()).toBeTruthy()
    })
})