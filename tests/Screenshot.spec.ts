import { test } from "@playwright/test";

test('screenshot test', async ({ page }) => {
    await page.goto('https://demoqa.com/');

    await page.screenshot({
        path: 'F:/AAA_PW/PMPractice/ss/iwdg1.png',
        fullPage: true
    })
})