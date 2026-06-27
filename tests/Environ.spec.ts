import { test, expect } from '@playwright/test';

test('User can login with environment credentials', async ({ page }) => {
    // Navigate to login page
    await page.goto(process.env.BASE_URL!);

    // Fill in credentials from .env file
    await page.fill('#user-name', process.env.USER_NAME!);
    await page.fill('#password', process.env.PASSWORD!);

    // Click login
    await page.click('#login-button');

    // Verify successful login
    await expect(page).toHaveURL(/.inventory/);
});
