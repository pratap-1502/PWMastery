import test, { expect } from "@playwright/test";

test('Handling multiple windows',async({page})=>{
    await page.goto('https://gmail.com')
    await page.waitForTimeout(2000)
    //Wait for "popup" event to appear on the page for help link
    const helpromise =  page.waitForEvent('popup')
    //click help link which is responsible to open in new tab
    await page.locator("a[target='_blank']").nth(1).click()
    //to perfom any action on new tab create referenc
    const helplink =   await helpromise
    //assert text in child window
    await page.waitForLoadState()
    await expect(helplink.locator('#material-bar-custom-product-name')).toContainText(/Google Account/)
    console.log('Help page title',await helplink.title())
    await page.waitForTimeout(2000)
    //close child tab
    helplink.close()
//handle privacy tab
//Wait for "popup" event to appear on the page for privacy link
const privacyPromise = page.waitForEvent('popup')
//click privay link
await page.locator("a[target='_blank']").nth(2).click()
const privaylink = await privacyPromise
await page.waitForLoadState()
//click on FAQs link in new window
await privaylink.locator(".MyGDhe").nth(4).click()
console.log('privacy page title ',await privaylink.title())
 await page.waitForTimeout(2000)
    //close child tab
    privaylink.close()
    //go to parent window
    await page.bringToFront()
    await page.getByRole('textbox',{name:'Email or phone'}).fill('pranga2010@gmail.com')
    await page.waitForTimeout(2000)
    page.close()

})