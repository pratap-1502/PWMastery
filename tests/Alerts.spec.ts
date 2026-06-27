import { test, expect } from '@playwright/test'
test('Alerts testing', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(2000)
    //create a dialog listener
    page.on('dialog', async (dialog) => {

        //return type of alert
        const alert = dialog.type()
        console.log('alert message ', alert)
        const alertmessage = dialog.message()
        console.log(alertmessage)
        await page.waitForTimeout(3000)
        dialog.accept()

        //clickbutton
        await page.getByText('cick for js alert').click()
        await page.waitForTimeout(3000)
        const webtest = await page.getByText('You successfully clicked an alert').last().textContent()
        console.log('web page message :: ', webtest)
        await expect.soft(page.getByText('You succesfully clicked an alert')).toBeVisible()
        await page.waitForTimeout(3000)

    })
})