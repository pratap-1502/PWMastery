import { test, expect } from '@playwright/test';

test('Alerts testing', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Create dialog listener before clicking the alert button
    page.on('dialog', async (dialog) => {
        const alertType = dialog.type();
        console.log('Alert type:', alertType);

        const alertMessage = dialog.message();
        console.log('Alert message:', alertMessage);

        await dialog.accept();
    });

    // Click button outside dialog listener
    await page.getByText('Click for JS Alert').click();

    const webText = await page.locator('#result').textContent();
    console.log('Web page message:', webText);

    await expect.soft(page.locator('#result'))
        .toHaveText('You successfully clicked an alert');
});