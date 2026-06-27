import test, { expect } from "@playwright/test";

test('Handling select html tag listbox', async ({ page }) => {

    await page.goto('https://qa-practice.netlify.app/register');

    // Select by visible text / default value
    await page.getByRole('combobox').selectOption('India');

    // Select by label
    await page.getByRole('combobox').selectOption({ label: 'Australia' });

    // Select by value
    await page.getByRole('combobox').selectOption({ value: 'Chile' });

    // Assertion: check selected value
    await expect(page.getByRole('combobox')).toHaveValue('Chile');

    // Select by index
    await page.getByRole('combobox').selectOption({ index: 20 });
});