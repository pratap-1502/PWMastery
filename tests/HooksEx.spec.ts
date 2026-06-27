import { test, expect } from '@playwright/test'


test.beforeEach(async ({ page }) => {

    await page.goto('https://qa-practice.razvanvancea.ro/')
    console.log(" before each done test")
    await page.waitForTimeout(2000)


})


test('Test1 ', async ({ page }) => {

    await page.locator("//b[contains(text(),'GraphQL Testing')]").click()
    console.log("Test1 done test")



})

test('Test2', async ({ page }) => {

    await page.locator("a#visual b").click()
    console.log("Test2 done test")



})


test('Test3 ', async ({ page }) => {

    await page.locator("#alerts").click()
    console.log("Test3 done test")



})

test.afterEach(async ({ page }) => {
    console.log('AfterEach executed')
    await page.close()
})