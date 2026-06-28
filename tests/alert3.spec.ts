import { test, expect } from "@playwright/test"

test('dialog test', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)
    page.on('dialog', async (dialog) => {
        const dialogtype = dialog.type()
        console.log(`type of dialog ${dialogtype}`)
        const dialogmsg = dialog.message()
        console.log(`message on dialog message ${dialogmsg}`)
        //click the cancel message
        await page.waitForTimeout(3000)
        dialog.dismiss()
    })

    //clickbutton

    await page.getByText('Click for JS Confirm').click({ force: true })
    const webtext = await page.locator('#result').textContent()
    console.log(`Web message is :: ${webtext}`)
    await expect.soft(page.locator('#result')).toContainText(/Cancel/)


})