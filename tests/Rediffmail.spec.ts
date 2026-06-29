import { test, expect } from "@playwright/test"

test('Rediff mail', async ({ page }) => {
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi")
    await page.getByRole('link', { name: 'Get a new Rediffmail ID' }).click()
    await page.getByPlaceholder('Enter your full name').fill('Trump')
    await page.getByPlaceholder('Enter Rediffmail ID').fill('truman3423pm')
    await page.getByPlaceholder('Enter password').fill('Silverfox@32')
    await page.getByPlaceholder('Retype password').fill("Sonarqube@23")
    await page.getByRole('combobox').nth(0).selectOption('03')
    await page.getByRole('combobox').nth(1).selectOption('MAR')
    await page.getByRole('combobox').nth(2).selectOption('2013')
    await page.getByRole('radio', { name: 'Male' }).nth(0).check()
    await page.getByRole('combobox').nth(3).selectOption('India')
    await page.getByRole('combobox').nth(4).selectOption('Aizwal')
    await page.getByPlaceholder('Enter recovery email').fill('Te23432st@gmail.com')
    await page.locator('#mobno').fill('9705243243')
    await page.waitForTimeout(3000)
    //await page.getByRole('textbox', { name: 'My Mobile Number' }).fill('9705681425')
    await page.locator('#Register').click()



})