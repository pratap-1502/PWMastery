import  { expect } from "@playwright/test";
import { baseTest } from "../fixtures/loginFixture";
import fs from 'fs';

baseTest.use({storageState:'noAuth.json'})


baseTest('Xpath Locators', async({loginFixtursauce})=>{

    const page=loginFixtursauce.pages()[0];

 await page.locator("(//div[@class='inventory_item_name '])[2]").click(); //Relative Xpath
 await expect(page.locator("//div[contains(@class,'inventory_details_name large')]")).toBeVisible()
 await expect(page.locator("//div[contains(@data-test,'desc')]")).toBeVisible();
 await expect(page.locator("//div[contains(@data-test,'price')]")).toHaveText(/9.99/);
 await page.locator("//button[starts-with(@id,'add')]").click({trial:true})
 const productImgSS= await page.locator("//img[@class='inventory_details_img']").screenshot({path:'productImg.png'})
 const expProductimgss= fs.readFileSync('./productImgBM.png')
  expect(productImgSS).toEqual(expProductimgss);

  if(fs.existsSync('./productImg.png')){

    fs.unlinkSync('./productImg.png')
  }
  
})