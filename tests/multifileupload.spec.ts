import { test, expect } from "playwright/test"
import path from "path"


test('multifile upload', async ({ page }) => {

    const f1 = path.join(__dirname, '../TestData/Testdata.png')
    const f2 = path.join(__dirname, '../TestData/Sample2.xlsx')
    const f3 = path.join(__dirname, '../TestData/Sample.txt')
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.waitForTimeout(2888)

    await page.locator('#filesToUpload').setInputFiles([f1, f2, f3])
    const allfilelocator = page.locator('ul#fileList>li')
    const filenames = await allfilelocator.allInnerTexts()
    console.log(filenames)
    await expect(allfilelocator.first()).toBeVisible()
    await expect(allfilelocator.nth(1)).toBeVisible()
    await expect(allfilelocator.last()).toBeVisible()

    await page.waitForTimeout(3000)


})

