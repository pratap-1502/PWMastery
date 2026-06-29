import test from "@playwright/test";

test('Verify blue option is available in the list',async ({page}) => {
    await page.goto('file:///C:/qedgePlaywright/MultiListboxHtmlpage_lyst1781103303836.html')
    const list =  page.locator('select')
    await list.selectOption(['Blue','Green','black']);
    const options = page.locator('select option')
    const optionsCount= await options.count();
    let duplicates=false;

    for (let i=0;i<optionsCount;i++) {
        const option= await options.nth(i).textContent();
        console.log(option)
        if(option?.toLowerCase()=='silver'){
            duplicates=true;
            break;

        }
        
    }

    

    await page.waitForTimeout(5000)
});

test('Verify duplicates in a list box using arrey list method',async ({page}) => {
    await page.goto('file:///C:/qedgePlaywright/MultiListboxHtmlpage_lyst1781103303836.html')
    const list =  page.locator('select')
    await list.selectOption(['Blue','Green','black']);
    const options = page.locator('select option')
    const optionsCount= await options.count();

    const optionslist: string[]=[];
    const duplicateOpt: string[]=[]

    for (let i = 0; i < optionsCount; i++) {
        
        const option= (await options.nth(i).textContent())?.trim()|| '';
        if (optionslist.includes(option)) {
            duplicateOpt.push(option)
            
        }else{
            optionslist.push(option)
        }
        console.log('options list:', optionslist)
        console.log('duplicate list:', duplicateOpt)
    }
    await page.waitForTimeout(5000)
});

test('Verify duplicates in a list box using unique set method',async ({page}) => {
    await page.goto('file:///C:/qedgePlaywright/MultiListboxHtmlpage_lyst1781103303836.html')
    const list =  page.locator('select')
    await list.selectOption(['Blue','Green','black']);
    const alloptions = await page.locator('select option').allTextContents();
    const uniqueOptions= [...new Set(alloptions)]

    if (alloptions.length!==uniqueOptions.length) {
        console.log('Duplicates are Present')
    }else{
        console.log('Duplicates are not present')
    }

    
    await page.waitForTimeout(5000)
});