import test from "@playwright/test";

test.use({storageState:'noAuth.json'})

test('all Labels',async ({page}) => {
    await page.goto('https://qa-practice.netlify.app/register');
    await page.waitForLoadState();

    const allLabels=  page.locator('label'); 
    const labelCount = await allLabels.all();
  
    const allLabels2 = await page.locator('label').allTextContents();
    console.log(allLabels2)

    for (const labels of labelCount) {

        console.log("Label Names: ", await labels.textContent())
        
    }


});