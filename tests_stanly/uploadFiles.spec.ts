import test, { expect } from "@playwright/test";
import path from "path";

test.describe.configure({mode:'serial'})
test('Uploading single file',async ({page}) => {

    await page.goto('https://qa-practice.netlify.app/file-upload');
    const filePath= path.join(__dirname, '../productImgBM.png')
    await page.locator('#file_upload').setInputFiles(filePath)
    await page.getByRole('button', {name:'Submit'}).click();
    await expect(page.locator('#file_upload_response')).toContainText(/productImgBM.png/)
    await page.waitForTimeout(4000)
});

test('Uploading multiple files',async ({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    const filePath= path.join(__dirname, '../productImgBM.png')
    const filePath2= path.join(__dirname, '../results.json')
    const filePath3= path.join(__dirname, '../package.json')
    await page.locator('#filesToUpload').setInputFiles([filePath,filePath2,filePath3])
   
    await expect(page.locator('#fileList')).toContainText(/(productImgBM.png|results.json|package.json)/)
    await page.waitForTimeout(4000)
});

test('Uploading multiple file using drag and drop',async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/upload');
    const filePath1= path.join(__dirname, '../productImgBM.png')
    const filePath2= path.join(__dirname, '../productImgBM.png')

    const [filechooser]= await Promise.all([page.waitForEvent('filechooser'),page.locator('#drag-drop-upload').click()])
    await filechooser.setFiles([filePath1,filePath2]);
    // await page.getByRole('button', {name:'Submit'}).click();
    // await expect(page.locator('#file_upload_response')).toContainText(/productImgBM.png/)
    await page.waitForTimeout(4000)
});