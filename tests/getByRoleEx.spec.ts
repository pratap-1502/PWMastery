import { test, expect } from "@playwright/test"
test('Get by Role', async ({ page }) => {

    await page.goto("https://qa-practice.netlify.app/auth_ecommerce")
    await page.getByRole('link', { name: 'forms' }).click()
    await page.getByRole('link', { name: 'Register' }).click()
    await page.getByRole('textbox', { name: 'First Name' }).fill("Elon")
    await page.getByRole('textbox', { name: 'Last Name' }).fill("Musk")
    await page.getByRole('textbox', { name: 'Phone number' }).nth(1).fill("7338497234")
    await page.getByRole('combobox').nth(0).selectOption('India')
    await page.getByRole('textbox', { name: 'email' }).fill('test@gmail.com')
    await page.getByRole('textbox', { name: 'password' }).fill('nonal@99')
    await page.getByRole('checkbox', { name: 'I agree with the terms and conditions' }).check()
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Register' }).click()
    await page.waitForTimeout(3000)

})