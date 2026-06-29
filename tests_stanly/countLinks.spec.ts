import test from "@playwright/test";

test.use({storageState: 'noAuth.json'})
test.describe.configure({mode:'parallel'})

test('Links in a page',async ({page}) => {
    
    await page.goto('https://qaplayground.com/practice/alerts-dialogs')
    await page.waitForLoadState();
    const allLinks =  page.locator('a');
    const linksCount= await allLinks.count();
    console.log(linksCount)

    for(let i=0; i<linksCount; i++){
        const eachLinkName = await allLinks.nth(i).textContent();
        const eachLink = await allLinks.nth(i).getAttribute('href');

        console.log(`${i}:: ${eachLinkName?.trim()}:: ${eachLink}`)
    }
});

test('Links in a page 2',async ({page}) => {
    
    await page.goto('https://www.google.com/')
    await page.waitForLoadState();
    const allLinks =  page.locator('a');
    const linksCount= await allLinks.all();
    console.log(linksCount.length)
        for (const link of linksCount) {

            console.log("Link Name", await link.textContent(), "Link", await link.getAttribute('href')) 
        }
    });