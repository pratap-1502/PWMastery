import test from "@playwright/test";

test("goto", async ({ page }) => {
  await page.goto("https://playwright.dev");

  const url = page.url();
  const title = await page.title();
  console.log(title);
  console.log(title.length);
  console.log(url);
  console.log(url.length);
});
