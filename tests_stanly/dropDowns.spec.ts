import test, { expect } from "@playwright/test";
import { count } from "node:console";

test.use({storageState:'noAuth.json'})
test.describe.configure({mode:'parallel'})

test('Dropdown selection',async ({page}) => {
    await page.goto('https://qa-practice.netlify.app/register');
    await page.waitForLoadState();


    //await page.locator('#countries_dropdown_menu').selectOption('Angola');
    const listbox = await page.getByRole('combobox')
    const allOptCText = await listbox.locator('option')
    const allOptCount = await allOptCText.all();

        // for (const option of allOptCount) {
        //     console.log(await option.textContent());

            
        // }
    for (const key in allOptCount) {
       const element = allOptCount[key]
       const eachOp = await element.textContent();

       console.log(`${key}: ${eachOp?.trim()}`)

        
        
    }

});

test('Verify item available in list',async ({page}) => {
    
    await page.goto('https://qa-practice.netlify.app/register');
    await page.waitForLoadState();

    const expVal= 'India1';
    let result = false;


    const allOpt =  page.getByRole('combobox')
    const allOpt1= await allOpt.locator('option')
    const allOptTextarrey = await allOpt1.all();
    

    for(let i=1; i<allOptTextarrey.length; i++ ){
        const eachOpt= await allOpt1.nth(i).textContent();
        //console.log(eachOpt);

        if (eachOpt?.match(expVal)){

            result= true;
            break
        }

    }
    console.log(`the result is ${result}`)
    
});

test('verify options are in asending order',async ({page}) => {
    
    await page.goto('https://qa-practice.netlify.app/register');
    await page.waitForLoadState();


    const allOpt =  await page.locator('#countries_dropdown_menu option')
    const allOptTextarrey = await allOpt.allTextContents();
    const asendOrd= [...allOptTextarrey].sort();

     expect(allOptTextarrey).toEqual(asendOrd) //Expected failure due to special char in the list

})