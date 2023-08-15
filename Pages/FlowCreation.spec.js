exports.FlowCreation=class FlowCreation{
    constructor(page)
    {
        this.page=page;
        this.flowsPage=page.locator("//a[@id='myFlows']//span[@class='ms-Button-flexContainer flexContainer-208']");
        this.NewFlow=page.locator("//span[@id='id__287']/../../../../../../../../../../../../../../../../../../../../../..//span[@class='ms-Button-flexContainer flexContainer-220']")
        this.InstantCloudFlow=page.locator("//span[@id='id__287']//following::span[normalize-space()='Instant cloud flow']")

    }

     async newflowCreation() {
<<<<<<< HEAD
        //await this.page.goto('https://make.powerautomate.com/environments/61a1f5ec-4b5c-ece7-a913-bda01762dd1d/home');
=======
>>>>>>> 17274d7b835d05ccec025c7363e5832e67ee0ba7
        await this.flowsPage.click();
        await this.NewFlow.click();
        await this.InstantCloudFlow.click();
        
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 17274d7b835d05ccec025c7363e5832e67ee0ba7
