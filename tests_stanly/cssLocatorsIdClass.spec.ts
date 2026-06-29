import { test, chromium, expect } from "@playwright/test";

test.use({storageState: 'noAuth.json'});

test("Locators", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.google.com");
  await page.goto(process.env.BASE_URL!);
  await page.locator("#user-name").fill(process.env.USERNAME!);
  await page.locator("#password").fill(process.env.PASSWORD!);
  await page.locator("#login-button").click();

  await expect(page.locator(".app_logo")).toBeVisible();
  await expect(page.locator(".title")).toBeVisible();
  await page.locator(".inventory_item_name ").first().click(); //click on 1st product
  await expect(page.locator("#back-to-products")).toBeVisible();
  const pdtURL = page.url();

  await page.locator("#react-burger-menu-btn").click(); //click on RHS menu
  await page.locator("#inventory_sidebar_link").click(); //Click on All Iteams menu action
  const allPdtsURL = page.url();

  expect(pdtURL).not.toStrictEqual(allPdtsURL); //verify URL after navigating to a product

  await page.locator("#react-burger-menu-btn").click(); //click on RHS menu
  await page.locator("#about_sidebar_link").click(); //Click on about link
  const aboutURL = page.url();

  expect(allPdtsURL).not.toBe(aboutURL); //Verify after url after navigating to about link
  expect(aboutURL.startsWith("https://saucelabs.com"));

  await page.goBack();
  expect(page.url()).toStrictEqual(allPdtsURL); //verify URL after navigating back

  await page.locator("#add-to-cart-sauce-labs-backpack").click();
  await page.locator("#add-to-cart-sauce-labs-bike-light").click();
  await expect(page.locator(".shopping_cart_badge")).toContainText("2");

  await page.locator("#react-burger-menu-btn").click(); //click on RHS menu
  await page.locator("#reset_sidebar_link").click(); //click on Reset app state
  await expect(page.locator(".shopping_cart_badge")).toHaveCount(0); //verify cart is reset

  await page.locator("#logout_sidebar_link").click(); //Click on logout
  expect(page.url().endsWith("https://www.saucedemo.com")); // Verify url after logout
  await expect(page.locator("#login-button")).toBeVisible(); //verify login button visible

  await browser.close();
});
