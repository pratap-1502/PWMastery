//Open Amazon
//Verify URL contains "amazon"

import { expect, test } from "@playwright/test"

test('Amazon test', async ({ page }) => {
    await page.goto('https://www.amazon.in/')
    const title = await page.title()
    await page.waitForTimeout(3000)
    expect(title).toContain('Amazon')

})