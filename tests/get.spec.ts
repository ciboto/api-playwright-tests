import { expect } from '@playwright/test';
import { pwApi, test } from 'pw-api-plugin';


test.describe('PW API Tests Example - Method GET', () => {
    test('Verify pwApi GET', async ({ request, page }) => {
        const responseGet = await pwApi.get({ request, page }, `/posts/1`)
        expect(responseGet.status()).toBe(200)
        const responseBodyGet = await responseGet.json()
        expect(responseBodyGet).toHaveProperty('id', 1)
    }) 

    test('Verify pwApi for Failing GET Method (404)', async ({ request, page }) => {
        // ❌ Example for get with wrong URL
        const responseFetch = await pwApi.get({ request, page }, `/error-endpoint`)
        expect(responseFetch.status()).toBe(404)
    })

})