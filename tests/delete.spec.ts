import { expect } from '@playwright/test';
import { pwApi, test } from 'pw-api-plugin';


test.describe('PW API Tests Example - Method DELETE', () => {
    test('Verify pwApi DELETE ', async ({ request, page }) => {
        const responseDelete = await pwApi.delete({ request, page }, 'https://jsonplaceholder.typicode.com/posts/1');
        expect(responseDelete.ok()).toBeTruthy()
    })
})