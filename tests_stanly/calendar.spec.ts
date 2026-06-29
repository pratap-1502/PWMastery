import test from "@playwright/test";

test('Calenter input',async ({page}) => {
    
    await page.goto('https://practice-automation.com/calendars/');
    await page.fill('#g1065-1-selectorenteradate', "1996-11-04");
    await page.waitForTimeout(5000);
});

test('Calenter input moment',async ({page}) => {
    
    await page.goto('https://practice-automation.com/calendars');
    await page.locator('#g1065-1-selectorenteradate').click();

    const prev=  page.locator(".dp-prev")
    const year= page.locator(".dp-cal-year")
    const month= page.locator(".dp-cal-year")
    let yeard= "2024"

    while (await year.textContent()!==yeard) {

        await prev.click();
    }
    //await prev.click();


   // await page.fill('#g1065-1-selectorenteradate', "1996-11-04");
    await page.waitForTimeout(5000);
});