import { test, expect } from "@playwright/test";

test.use({storageState: 'noAuth.json'});

test("css Locators with parent and child type", async ({ context }) => {
  const page = await context.newPage();
  await page.goto(process.env.BASE_URL!); // Navigating to HRM applications
  //await page.waitForTimeout(6000);
  await expect(page.locator("div.orangehrm-login-forgot>p")).toBeVisible();
  await expect(page.locator("div.orangehrm-login-forgot>p")).toBeVisible();

  await page.locator("div>input").first().fill(process.env.USERNAME!);
  await page.locator("div>input").last().fill(process.env.PASSWORD!);
  await page.locator("div>button").click();
  await page.waitForLoadState("networkidle");
//   await page.waitForTimeout(4000)
  await page.locator("div>input.oxd-input.oxd-input--active").fill("Leave");
  await expect(
    page
      .locator("a>span.oxd-text.oxd-text--span.oxd-main-menu-item--name")
      .getByText("Leave")).toBeVisible();
  await expect(
    page
      .locator("a>span.oxd-text.oxd-text--span.oxd-main-menu-item--name")
      .getByText("PIM")).not.toBeVisible();
    await page.waitForTimeout(4000);
    await page.locator("div>input.oxd-input.oxd-input--focus").clear(); 
    await expect(
    page
      .locator("a>span.oxd-text.oxd-text--span.oxd-main-menu-item--name")
      .getByText("PIM")).toBeVisible();
    await expect(page.locator("span h6")).toBeVisible();
    await page.locator("button.oxd-icon-button.oxd-main-menu-button i").click();
    await expect(
    page
      .locator("a>span.oxd-text.oxd-text--span.oxd-main-menu-item--name")
      .getByText("PIM")).not.toBeVisible();
    await page.locator("span p").click();
    await page.locator("li a.oxd-userdropdown-link").getByText('Logout').click();
    await page.waitForLoadState();
    await expect(page.locator("div h5")).toBeVisible();
});
