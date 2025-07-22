import { expect } from '@playwright/test';
import { pwApi, test } from 'pw-api-plugin';


test.describe('PW API Tests Example - Method PUT', () => {
    test('Verify pwApi PUT', async ({ request, page }) => {
        // with request: body, headers, params, timeout, maxRetries
        const responsePut = await pwApi.put({ request, page }, '/posts/1', 
            {
                data: {
                    id: 1,
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                },
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                params: { _limit: 1000, _details: true },
                timeout: 2000,
                maxRetries: 1
            }
        )
        expect(responsePut.ok()).toBeTruthy()
        const responseBodyPut = await responsePut.json()
        expect(responseBodyPut).toHaveProperty('id', 1)
    })
})