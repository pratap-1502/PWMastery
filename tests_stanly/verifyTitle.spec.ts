//verify expected title of the page 

import { test, expect } from '@playwright/test';

test.use({storageState: 'noAuth.json'});

test('verify title of the page', async ({ page }) => {
//Launch and navigate to url
await page.goto('https://google.com');
await expect(page).toHaveTitle(/Google/);
//suspend playwright for 2 seconds 
await page.waitForTimeout(2000) //hard wait 
const ActualTitle= await page.title();
const ExpectedTitle = 'Google'

if (ExpectedTitle===ActualTitle){

    console.log(`expectedtitle: ${ExpectedTitle} is equal to actual title: ${ActualTitle}. The test is Pass`)
}
else{
console.log(`expectedtitle: ${ExpectedTitle} is not equal to actual title: ${ActualTitle}. The test is Fail`)

}
})

test('check URL', async function({page}){
//launch the browser 
await page.goto('http://facebook.com/')
const Expected="https://"
const Actual = await page. url()
if (Actual.startsWith(Expected)){
console.log(`URL is secure as the expected: ${Expected} is equal to actual: ${Actual}. Hence the test pass`)

}
else {
console.log(`URLis not secure as the expected: ${Expected} is equal to actual: ${Actual}. Hence the test fail`)
}

})

