import test, { expect } from "@playwright/test";
import { error } from "node:console";


test('select and verify 1st radio buttons ',async ({page}) => {

    //Navigation
    await page.goto('https://qaplayground.com/practice/radio-checkbox');
    //locators
    const yesRadBtn=  page.getByTestId('radio-yes-1')
    const noRadBtn=  page.getByTestId('radio-no-1')

    //Assert
    await expect( yesRadBtn).not.toBeChecked();
    //Action
    await yesRadBtn.click({trial:true})
    //Assert
    await expect( yesRadBtn).not.toBeChecked();
    //Action
    await yesRadBtn.click(); 
    //Assert
    await expect( yesRadBtn).toBeChecked();
    await expect( noRadBtn).not.toBeChecked();
    //Action
    await noRadBtn.click();
    //Assert
    await expect( noRadBtn).toBeChecked();
    await expect( yesRadBtn).not.toBeChecked();

});

test('select and verify 3st radio buttons ',async ({page}) => {

    //Navigation
    await page.goto('https://qaplayground.com/practice/radio-checkbox');
    //locators
    const yesRadBtn=  page.getByTestId('radio-bug-yes')
    const noRadBtn=  page.getByTestId('radio-bug-no')

    //Assert
    await expect.soft( yesRadBtn).not.toBeChecked();
    await expect.soft( noRadBtn).not.toBeChecked();

    //Action
    await yesRadBtn.click(); 
    //Assert
    await expect.soft( yesRadBtn).toBeChecked();
    await expect.soft( noRadBtn).not.toBeChecked();

    //Action
    await noRadBtn.click();
    //Assert
    await expect.soft( yesRadBtn).not.toBeChecked();
    await expect.soft( noRadBtn).toBeChecked();

    //* To throw a new error message
    // if(test.info().errors.length>0){

    //     throw new Error('Soft assertion failed.')
    // }

    //*used to make the recorded errors to 0
    //test.info().errors.splice(0);
    // test.info().errors.length = 0;
    
});

test('Verify disabled checkbox is not selected',async ({page}) => {
    //Navigation
    await page.goto('https://qaplayground.com/practice/radio-checkbox');
    //Locator 
    const disRadio =  page.getByTestId('radio-maybe')
    const checkboxSel =  page.getByTestId('checkbox-remember-me')
    const tC =  page.getByLabel('I agree to the FAKE terms and conditions')

    //Action
    //await disRadio.click({trial:false});
    await expect(disRadio).toBeDisabled();
    await expect(checkboxSel).toBeChecked();
    const checkboxStatus= await checkboxSel.isChecked();
    console.log(`check status is ${checkboxStatus}`)
    //Action
    await checkboxSel.click();
    //Assert
     await expect(checkboxSel).not.toBeChecked();
    const checkboxStatusAfter= await checkboxSel.isChecked();
    console.log(`check status is ${checkboxStatusAfter}`)

    await tC.click();
    await expect(tC).toBeChecked();
    await page.waitForTimeout(4000)


});

test('Verify page load status',async ({request,page}) => {
   // verifying has no console errors
     const consoleErrors:String[]= [];

     page.on('console', msg=>{
        if (msg.type()==='error'){
            consoleErrors.push(msg.text())
        }
     });
     const reUrl= await request.get('https://qaplayground.com/practice/radio-checkbox');
     //Assert page status code
     expect(reUrl.status()).toBe(200)
     //Assert console errors
     expect(consoleErrors).toHaveLength(0)

    
});