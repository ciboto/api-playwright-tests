import { expect } from '@playwright/test';
import { pwApi, test } from 'pw-api-plugin';


test.describe('PW API Tests Example - Method HEAD', () => {
    test('Verify pwApi HEAD', async ({ request, page }) => {
        const responseHead = await pwApi.head({ request, page }, `/posts/1`)
        expect(responseHead.status()).toBe(200)
    })
})