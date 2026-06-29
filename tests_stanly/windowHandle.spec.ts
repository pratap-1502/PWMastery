import { test, expect } from "@playwright/test";

test.use({storageState:'noAuth.json'})
test('Window handling',async ({page}) => { 

    await page.goto('https://www.google.com/')
    await page.getByRole('link', {name: 'Sign in'}).click();
    //await page.waitForTimeout(10000)

    const [helpPage]= await Promise.all([ page.waitForEvent("popup"), page.getByRole('link', {name: 'Help'}).click()]);
    await helpPage.waitForLoadState();
        await page.waitForTimeout(10000)
        //const HelpLink= helpPage
 await expect(helpPage.getByText('How can we help you?')).toBeVisible();

    
});

test('Window handling 2',async ({page}) => { 

    await page.goto('https://www.google.com/')
    await page.getByRole('link', {name: 'Sign in'}).click();

    const newPage= page.waitForEvent("popup");
    await page.getByRole('link', {name: 'Help'}).click()
    const HelpPage= await newPage
await HelpPage.waitForLoadState();
       // await page.waitForTimeout(10000)
        //const HelpLink= helpPage
 await expect(HelpPage.getByText('How can we help you?')).toBeVisible();
 console.log(await HelpPage.title());
 HelpPage.close();
 await page.bringToFront();
  await page.waitForTimeout(5000)

 await page.getByRole('textbox', {name:'Email or phone'}).fill('Test@gmail.com')
 await page.waitForTimeout(5000)

 
})

test('Verify external links open in a new tab and contain expected keywords',async ({page}) => { 

    await page.goto('https://www.google.com/')
    await page.getByRole('link', {name: 'Sign in'}).click();

    await page.waitForLoadState();

    const allLinks=  page.locator("[target='_blank']") 
    const allLinkCount= await allLinks.all();

    for(let i=0; i<allLinkCount.length;i++){
    const eachLink= await page.locator("[target='_blank']").nth(i).getAttribute('href')

        //const newPage= page.waitForEvent('popup') //*can use this instead of promise.all
        const link=  page.locator("[target='_blank']").nth(i);
        // const newpage= await newPage //*can use this instead of promise.all
        
        const [newTab]= await Promise.all([page.waitForEvent('popup'),link.click()]);
       
        await newTab.waitForLoadState();
        const title = await newTab.title();

        if (
            title.toLowerCase().includes('help')||
            title.toLowerCase().includes('privacy')||
            title.toLowerCase().includes('terms')
        ){

            console.log(`Title is Matched with: ${title}`)
        }
        else {
            console.log(`Title is Not Matched with: ${title}`)
        }
        console.log(eachLink)
        await newTab.close();
    }
})