import { test, expect } from "@playwright/test"
test('Demo website ', async ({ page }) => {
    await page.goto("https://demoqa.com/")
    await page.waitForTimeout(2000)
    console.log("Pgm executed and waited for 2 seconds")
    page.close()
})