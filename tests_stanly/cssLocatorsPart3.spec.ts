
import { baseTest } from "../fixtures/loginFixture";
import { expect } from "@playwright/test";

baseTest.use({storageState: 'noAuth.json'});

baseTest('verify dashboard page', async({loginFixtursauce})=>{
    const page= await loginFixtursauce.newPage();
    await page.goto(process.env.BASE_URL!)
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
})

baseTest('verify dashboard page 2', async({loginFixtursauce})=>{
    const page= await loginFixtursauce.newPage();
    await page.goto(process.env.BASE_URL!)
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
})

baseTest('verify dashboard page 3', async({loginFixtursauce})=>{
    const page= await loginFixtursauce.newPage();
    await page.goto(process.env.BASE_URL!)
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
    await page.getByText("Sauce Labs Bike Light").click({delay: 6000})
    console.log("QA")})