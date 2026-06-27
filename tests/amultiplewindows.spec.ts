import { test, expect } from "@playwright/test"
test('Handling multiple windows with for...of loop', async ({ page }) => {
    await page.goto('https://gmail.com');

    // Store targets: index of the link and the expected text/title for verification
    const links = [
        { index: 1, name: 'Help' },
        { index: 2, name: 'Privacy' },
        { index: 3, name: 'Terms' }
    ];

    for (const link of links) {
        // Start waiting for popup before clicking
        const popupPromise = page.waitForEvent('popup');

        // Click the specific link based on index
        await page.locator("a[target='_blank']").nth(link.index).click();

        // Wait for the popup to capture the page object
        const newPage = await popupPromise;
        await newPage.waitForLoadState();

        console.log(`Opened ${link.name} window: ${await newPage.title()}`);

        // Perform window-specific logic if needed
        if (link.name === 'Privacy') {
            await newPage.locator("a.MyGDhe").nth(4).click();
            await newPage.waitForLoadState();
        }

        // Close the child window to return focus to main flow
        await newPage.close();
    }

    // Back to parent window actions
    await page.locator('input#identifierId').fill('example@gmail.com');
    await page.close();
});