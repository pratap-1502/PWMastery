import { test, expect } from "@playwright/test"
test('Reddif webtable', async ({ page }) => {
    await page.goto("https://money.rediff.com/")
    await page.waitForTimeout(3000)
    page.locator(".dropbtn.active>.arrow-icon").hover();
    await page.waitForTimeout(1000)
    //await page.locator("//div[@id='subnav']//a[text()='Forex']").click();
    await page.locator("nav.inlineflex .dropdown-content a[href*='tools/forex']").click();
    //await page.locator("a[href*='forex']:nth-child(3)").click()
    await page.waitForTimeout(1000)
    const wbt = page.locator('.dataTable')
    const rows = wbt.locator('tr')
    const rowscount2 = await wbt.locator('tr').count()
    console.log('rowscount2', rowscount2)
    for (let z = 1; z < rowscount2; z++) {
        const cols = rows.nth(z).locator('td')
        const colcount = await cols.count()
        for (let j = 0; j < colcount; j++) {
            //await page.waitForTimeout(1000)
            const celltxt = await cols.nth(j).textContent()
            console.log(celltxt)

        }

    }

}
)