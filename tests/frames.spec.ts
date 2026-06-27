import test from "@playwright/test";

test('frameTest',async({page})=>{

    await page.goto('https://jqueryui.com/datepicker/')
    const frame =  page.frameLocator('.demo-frame')
    await frame.locator('#datepicker').click()
//<input type="text" id="datepicker" class="hasDatepicker">
    

})