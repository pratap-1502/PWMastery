import { test, expect } from "@playwright/test"
test('Handling webtable', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/html_tables.asp')
    const webtable1 = page.locator('.ws-table-all').first()
    const headerscount = await webtable1.locator('th').count()
    console.log(`Total count of headers ${headerscount}`)
    const rowscount = webtable1.locator('tr')
    const rowlimit = await rowscount.count()
    for (let i = 1; i < rowlimit; i++) {
        const cols = await rowscount.nth(i).locator('td').count()
        console.log(` the count of number of cells in row is ${cols}`)

    }
})