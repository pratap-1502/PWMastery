import { test, expect } from "@playwright/test"

test('demo title verification', async ({ page }) => {
    await page.goto("https://demoqa.com/")
    const title = await page.title()
    console.log(`Title = ${title}`)
    await expect(page).toHaveTitle('demosite')
})