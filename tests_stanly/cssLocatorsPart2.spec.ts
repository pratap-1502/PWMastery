import {test,expect, chromium} from "@playwright/test";

test('css selectors part 2', async({browser})=>{
    //This script includes below type of CSS selectors
    //*nth child ('li:nth-child(n)')
    //*First child('li:first-child')
    //*Last child('li:last-child')
    //*starts with ^=
    //*ends with $=
    //*contains *=
    const context1= await  browser.newContext();
    const page= await context1.newPage();

    await page.goto(process.env.BASE_URL!,{waitUntil:'load'})
    //using child CSS type selectors
    await page.locator('li:nth-child(2)').click();
    await expect(page.locator('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').getByText('PIM')).toBeVisible();
    await page.locator('li:first-child').first().click();
    await expect(page.locator('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').getByText('Admin')).toBeVisible();
    await page.locator('li:nth-child(11)').click()
    await expect(page.locator('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').getByText('Claim')).toBeVisible();

    await browser.close()
    
});