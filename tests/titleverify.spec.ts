import test from '@playwright/test'
test('verifytitle',async({page})=>{
await page.goto("https://www.google.com")
await page.waitForTimeout(2000)
const expectedresult = 'Google'
let actualresult = await page.title()
if(actualresult === expectedresult )
{
    console.log('Title is matching')
}
else{
    console.log('title does not match')
}
}
)