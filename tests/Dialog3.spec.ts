import {test,expect} from "@playwright/test"

test('Dialog test', async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)
    page.on('dialog',async(dialog)=>{
        const alerttype = dialog.type()
        console.log(`type of alert is ${alerttype}`)
        const alertmsg = dialog.message()
        console.log(`given alert msg ${alertmsg}`)
        await page.waitForTimeout(3000)
        dialog.dismiss()
        
    })

    //clickbuttton
    await page.getByText('Click for JS Confirm').click({force:true})
    const webtext = await page.locator('#result').textContent()
    console.log(`Web Message is : : ${webtext}`)
    await expect.soft(page.locator('#result')).toContainText(/Cancel/)

})


