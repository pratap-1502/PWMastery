import {test,expect} from '@playwright/test'

test('googleTitleTest',async({page})=>{

    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle(/Google/)
}



)