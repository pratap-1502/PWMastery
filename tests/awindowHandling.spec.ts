import { test, expect } from "@playwright/test"

test('Handling multiple windows', async ({ page }) => {

    await page.goto("https://google.com")
    await page.waitForTimeout(3000)
    const helpPromise = page.waitForEvent("popup")
    // await page.locator(page.locator("a:has-text('Privacy')").click()
    await page.locator("a[target='_blank']").nth(1).click()
    const helplink = await helpPromise
    await page.waitForLoadState()
    await expect(helplink.locator('#material-bar-custom-product-name')).toContainText(/Google Account/)
    helplink.close()
    const privacyPromis = page.waitForEvent('popup')
    await page.locator("a[target='_blank']").nth(2).click()
    //const privacylink = await privacyPromise


})