import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
});