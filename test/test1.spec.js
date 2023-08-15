const {test,expect}=require('@playwright/test');
import { FlowCreation } from '../Pages/FlowCreation.spec';


  let page;

  test.beforeAll(async({browser})=>
  {
    page=await browser.newPage();
    await page.goto('https://make.powerautomate.com/environments/61a1f5ec-4b5c-ece7-a913-bda01762dd1d/home')
    await page.locator('#i0116').fill('user01@uciweeklyorgs01.onmicrosoft.com');
    await page.locator("//input[@id='idSIButton9']").click();
    await page.locator('#i0118').fill('T!T@n1130');
    await page.locator("//*[@id='idSIButton9']").click();
    await page.locator("//*[@id='idSIButton9']").click();

  })

  test('FlowCreationTest',async({page})=>{
     const FlowCreationObj= new FlowCreation(page);

      await FlowCreationObj.newflowCreation();

      //await page.waitForTimeout(3000);


  })

