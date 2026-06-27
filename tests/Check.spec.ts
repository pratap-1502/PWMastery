// Handling checkboxes and radio buttons
// ===================================================
// 1.click() to select checkbox or radio button
// 2.check() to select checkbox or radiobutton
// 3.uncheck()to unselect checkbox or radiobutton
// using above three method we can check or unchek checkbox or radio buttons
// 4.ischecked() it verify whether checkbox or radio button is checked or uncheked it return boolean results true or false
// Assertions:
// 1.tobechecked() it assert checkbox or radion button checked
// 2.not.tobeChecked() it assert checkbox or radio button should not be selected
// ============================================================================
import test, { expect } from "@playwright/test";

test('Checkbox validation',async({page})=>{
    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi')
    await page.waitForTimeout(3000)
    //verify checkbox is selected or not using ischecked method
    const checkbox:boolean= await page.locator('#remember').isChecked()
    console.log(checkbox)
//assert checkbox is to bechecked
await expect(page.locator('#remember')).toBeChecked({checked:true})
await page.waitForTimeout(3000)
//uncheck checkbox
await page.locator('#remember').uncheck()
//assert checkbox is nottobechecked
await expect(page.locator('#remember')).not.toBeChecked({checked:true})

})

test('Radio button',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/radiobuttons')
    await page.waitForTimeout(3000)
    //verify radio button selected or not
    const radio =await page.locator('#radio-button3').isChecked()
    console.log(radio)
    await expect(page.locator('#radio-button3')).toBeChecked()

})
test('Checkbox counting',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/checkboxes')
    await page.waitForTimeout(3000)
    //get collection of checkboxes
    const allcheckboxes = await page.locator('div.form-check input').all()
    console.log(`no of checkboxes are ${allcheckboxes.length}`)
    for (const element of allcheckboxes) {
        const checkbox_status:boolean = await element.isChecked()
        const eachcheckbox = await element.textContent()
        console.log(`${checkbox_status}  ${eachcheckbox}`)

    }
// =================================================================================
//to handle non select listbox which are having div tag
//1.identify listbox with div tag and click listbox

//2.select your required optin
test('Non select listbox',async({page})=>{
    await page.goto('https://demoqa.com/select-menu')
    await page.waitForTimeout(3000)
    //idetify listbox with div tag and clcik on it
    await page.locator("div.css-19bb58m").first().click()
    await page.locator('#react-select-2-option-0-1').click()
    await page.waitForTimeout(3000)
    await page.locator("div.css-19bb58m").first().click()
    await page.locator('#react-select-2-option-3').click()
await page.waitForTimeout(3000)
})
test('Multi listbox non select',async({page})=>{
    await page.goto('https://demoqa.com/select-menu')
    await page.waitForTimeout(3000)
    await page.locator('div.css-19bb58m').last().click()
    //count all items in listbox
    const alloptions = await page.locator('#react-select-4-listbox div').count()
    console.log(`No of items are ${alloptions}`)
    for(let i=0;i<alloptions;i++)
    {
        
        await page.waitForTimeout(3000)
        await page.locator('#react-select-4-option-'+i).click()
    }
    await page.waitForTimeout(3000)
})
})
