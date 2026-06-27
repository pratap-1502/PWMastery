import { test, expect } from "@playwright/test"
test('Reading webtable ', async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/html_tables.asp")
    const webtable2 = await page.locator('.ws-table-all').first()
    const rows = webtable2.locator('tr')
    const rowcount = await rows.count() - 1
    console.log('total no of rows ', rowcount)

    for (let k = 1; k < rowcount; k++) {



        const celldata =  rows.nth(k).locator('td').textContent()
        console.log(celldata)
        const colcount = await rows.nth(1).count()
        console.log(colcount)
    }
    console.log('-------------')
})