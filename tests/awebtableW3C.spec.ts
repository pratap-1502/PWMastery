import test from "@playwright/test"
test('Rows and columns count ',async({page})=>{
     await page.goto("https://www.w3schools.com/html/html_tables.asp")
     //const wtable = await page.locator('#customers')
     const wtable = await page.locator('.ws-table-all').first()
     console.log(wtable)
     const headers = await wtable.locator('th').count()
     console.log('count of headers ', headers)
     const rows = await wtable.locator('tr')
     const rowcount = await rows.count()
     console.log(`no of rows are ${rowcount}`)
     for(let i=1;i<rowcount;i++)
     {
        const cols = await rows.nth(i).locator('td').count();
        console.log("no of cells in each row ", cols)
     }


} )