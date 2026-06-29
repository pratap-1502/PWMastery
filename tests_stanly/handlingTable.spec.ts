import { expect,test } from "@playwright/test";



test('TableHandling- Verify table Headers',async ({page}) => {
    await page.goto('https://qa-practice.razvanvancea.ro/');
    await expect(page.getByRole('heading', {name:'Welcome!'})).toBeVisible();

    await page.locator('#forms').last().click();
    await page.getByRole('link', {name: 'Static Table'}).click();
    //await page.waitForTimeout(4000)

    //Accessing table Headers
        //Col_01_Header
    const header1= await page.locator('//table[@class="table"]/thead/tr/th[1]').textContent();
     expect(header1).toEqual('#');
        //Col_02_Header
    const header2= await page.locator('//table[@class="table"]/thead/tr/th[2]').textContent();
     expect(header2).toEqual('First');
        //Col_01_Header
    const header3= await page.locator('//table[@class="table"]/thead/tr/th[3]').textContent();
     expect(header3).toEqual('Last');
        //Col_02_Header
    const header4= await page.locator('//table[@class="table"]/thead/tr/th[4]').textContent();
     expect(header4).toEqual('Email');
        //Verifying the CSS(Text_weight) of the header  
     await expect(page.locator('//table[@class="table"]/thead/tr/th[4]')).toHaveCSS('font-weight','700')
        //get number of rows in the table
        const cells= await page.locator('//table[@class="table"]/tbody/tr[2]/*')
        const cellCount= await cells.count();
        console.log(cellCount+1)
        
     const rowCount= await page.locator('//table[@class="table"]/tbody/tr').count();
     const rows= page.locator('//table[@class="table"]/tbody/tr');
     for (let p = 1; p <= rowCount; p++) {
        const rowdata =  page.locator(`//table[@class="table"]/tbody/tr[${p}]/*`)
        console.log(await rowdata.allInnerTexts())
        
     }
     
     console.log(`Total number of rows in the table: ${rowCount}`);
     //get number of columns in the table
    const columnCount= await page.locator('//table[@class="table"]/tbody/tr').count();
     console.log(`Total number of columns in the table: ${columnCount}`);

    //Get the row data
    for (let i = 0; i <cellCount; i++) {
        console.log(await cells.nth(i).innerText())  
    }

    for(let i=1;i<=rowCount;i++){    
        //console.log(await rowData.nth(i).innerText()) 
        const cells= await page.locator(`//table[@class="table"]/tbody/tr[${i}]/* `)
        const cellCount= await cells.count();

            for (let j = 0; j <cellCount; j++) {
            console.log(await cells.nth(j).innerText())  
    }
    }
});