import test, { expect } from "@playwright/test";

test.describe.configure({mode:'parallel'})

test('Verify alert message and accept the alert',async ({page}) => {
    
    await page.goto('https://qaplayground.com/practice/alerts-dialogs');
        await page.waitForLoadState();
      page.on('dialog',async(dialog)=>{
        console.log(dialog.type())
        const alertText= dialog.message();
        console.log(alertText)
        dialog.accept();
        

     })
    await page.locator('#btn-simple-alert').click({force: true});
    
});

test('Verify confirm type alert and verify accept and cancel options',async ({page}) => {
    await page.goto('https://qaplayground.com/practice/alerts-dialogs')
    await page.waitForLoadState();

    page.once('dialog', async(dialog)=>{
        const alertType= dialog.type();
        const alertMessage=dialog.message();
        dialog.accept();
        console.log(`The popup is of type:  ${alertType}`)
        console.log(`The popup is displaying message:  ${alertMessage}`)

    })
    await page.getByTestId('btn-confirm-alert').click();
    await expect(page.getByTestId('result-confirm')).toContainText(/Accepted/)
    await expect(page.getByTestId('result-confirm')).toContainText(/Result/)

    page.once('dialog',async(dialog)=>{
        const alertType= dialog.type();
        const alertMessage=dialog.message();
        
        console.log(`The popup is of type:  ${alertType}`)
        console.log(`The popup is displaying message:  ${alertMessage}`)
        dialog.dismiss();

    })
     await page.getByTestId('btn-confirm-alert').click();
    await expect(page.getByTestId('result-confirm')).toContainText(/Dismissed/)
    await expect(page.getByTestId('result-confirm')).toContainText(/Result/)
});

test('Verify prompt type alert',async ({page}) => {
    await page.goto('https://qaplayground.com/practice/alerts-dialogs');
     page.waitForLoadState
    page.once('dialog', async(dialog)=>{
        const alertText= dialog.message();
        const alertType= dialog.type();

        //dialog.accept('Stanly Nimmakuri');
        dialog.dismiss();
        })
        await page.getByTestId('btn-prompt-alert').click();
        await page.getByTestId('result-prompt').isHidden();

    page.once('dialog', async(dialog)=>{
        const alertText= dialog.message();
        const alertType= dialog.type();

        dialog.accept('Stanly Nimmakuri');
        console.log(`the popup is of type ${alertType}
            The popup is displaying message: ${alertText}`)
    })
    await page.getByTestId('btn-prompt-alert').click();
    const enteredPrompt = await page.getByTestId('result-prompt').innerText();
     expect(enteredPrompt).toEqual('Your name is — Stanly Nimmakuri')
    await expect(page.getByTestId('result-prompt')).toHaveText('Your name is — Stanly Nimmakuri')

});













test('Alert Handling 2 ',async ({page}) => {
    
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.waitForTimeout(5000)
      page.on('dialog',async(dialog)=>{
        const alertType = dialog.type()
        console.log(alertType)
        dialog.accept();
        

     })
    await page.getByText('Click for JS Alert').click();
    await page.waitForTimeout(5000)
});


