import  {test, expect } from "@playwright/test"
test('Handling select html tag listbox',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/register')
    await page.waitForTimeout(2000)
    //select optin in listbox with deafult values
    await page.getByRole('combobox').selectOption('India')
    await page.waitForTimeout(2000)
    //select option with label
    await page.getByRole('combobox').selectOption({label:'Australia'})
    await page.waitForTimeout(2000)
    //select option in listbox with value
    await page.getByRole('combobox').selectOption({value:'Chile'})
    //assert select value in listbox
    await expect(page.getByRole('combobox')).toHaveValue('Chile')
    await page.waitForTimeout(2000)
    //select optin using index
    await page.getByRole('combobox').selectOption({index:20})//index starts from 0,1,2,3..
     await page.waitForTimeout(2000)

})