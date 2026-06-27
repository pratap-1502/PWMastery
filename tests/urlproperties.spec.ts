import {test} from '@playwright/test'
test('propertiesTest',async({page})=>{
    //get title
    await  page.goto('https://www.google.com')
    //get title now 
    const title =await page.title()
    console.log('title is '+title)
    const url =  page.url()
    console.log('url is ',url)
}

)