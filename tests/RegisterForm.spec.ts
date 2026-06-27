import { test, expect } from "@playwright/test"

test('Register Form', async ({ page }) => {

    await page.goto('https://qa-practice.netlify.app/register')
    await page.locator('input#firstName.form-control').fill("Elon")
    await page.locator('input#lastName').fill('Musk')
    await page.waitForTimeout(1000)
    await page.locator('#phone').fill('3243243243')
    await page.locator('.browser-default.custom-select').selectOption('Algeria')
    await page.locator('#emailAddress').fill('test@gmail.com')
    await page.locator('#password').fill('passwordtext')
    await page.locator('input#exampleCheck1').check()

})