import { expect } from '@playwright/test';
import { pwApi, test } from 'pw-api-plugin';


test.describe('PW API Tests Example - Method FETCH', () => {
    test('Verify pwApi FETCH (using default GET)', async ({ request, page }) => {
        const responseFetch = await pwApi.fetch({ request, page }, `/posts`);
        expect(responseFetch.status()).toBe(200)
        const responseBodyFetch = await responseFetch.json()
        expect(responseBodyFetch.length).toBeGreaterThan(4)
    })
})