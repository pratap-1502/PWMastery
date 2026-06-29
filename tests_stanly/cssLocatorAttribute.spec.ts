import {test, firefox, expect } from "@playwright/test";

test.use({storageState: 'noAuth.json'});

test('Locators using attribute type CSS', async ()=>{
    const browser = await firefox.launch(); //Create new browser
    const context = await browser.newContext(); //create browser context
    const page= await context.newPage(); //Create new page

    await page.goto(process.env.BASE_URL!);
    const sauceDemoPageTitle= await page.title();
    expect(sauceDemoPageTitle).toBe('Swag Labs'); //Verify URL 
    console.log(sauceDemoPageTitle);

        //Login to application 
    await page.locator("[placeholder='Username']").fill(process.env.USERNAME!);
    await page.locator("[type='password']").fill(process.env.PASSWORD!);
    await page.locator("[name='login-button']").click();

    await expect(page.locator("[data-test='shopping-cart-link']")).toBeVisible();
    await expect(page.locator("[data-test='title']")).toBeVisible();
    await expect(page.locator("[data-test='product-sort-container']")).toBeVisible();
    expect(page.locator("[type='button']").first().isVisible()).toBeTruthy(); //Verify the first button is visible

    await page.locator("[data-test='inventory-item-name']").nth(2).click();
    await page.locator("[name='add-to-cart']").click();
    await expect(page.locator("[class='shopping_cart_badge']")).toContainText('1');
    await page.locator("[type='button']").first().click();
    await page.locator("[type='button']").last().click();
    await expect(page.locator("[data-test='inventory-sidebar-link']")).not.toBeVisible();
    await page.locator("[type='button']").first().click();
    await page.locator("[data-test='inventory-sidebar-link']").click();
    await expect(page.locator("[class='title']")).toBeVisible();
    await page.locator("[type='button']").first().click();
    await page.locator("[data-test='reset-sidebar-link']").click();
    await expect(page.locator("[class='shopping_cart_badge']")).toHaveCount(0);

    await page.locator("[type='button'][id='react-burger-cross-btn']").click();
    await page.locator("[data-test='inventory-item-name']").nth(2).click();
    await page.locator("[data-test='add-to-cart'][name='add-to-cart']").click(); //Add product to cart
    await expect(page.locator("[class='shopping_cart_badge']")).toContainText('1');//Verify product added to cart
    await page.locator("[name='remove'][data-test='remove']").click();// Remove from cart
    await expect(page.locator("[class='shopping_cart_badge']")).toHaveCount(0);
    await page.locator("[id='back-to-products'][name='back-to-products']").click(); //Navigate back to home page
    await expect(page.locator("[class='title'][data-test='title']")).toBeVisible();



    //Logout of application 
    await page.locator("[type='button']").first().click();
    await page.locator("[id='logout_sidebar_link']").click();
    await expect(page.locator("[type='submit']")).toBeVisible();

    //close browser
    await browser.close();







})