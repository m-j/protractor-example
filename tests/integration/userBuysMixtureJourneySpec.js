describe('user buys mixture journey', function(){
    it('should let user buy mixture', function(){
        browser.get('/')
        expect($('h1').getText()).toEqual('Create potion')

        var wingMembraneAddButton = browser.findElement(by.xpath("//*[text()='Wing membrane']/../button"))
        wingMembraneAddButton.click()
        wingMembraneAddButton.click()
        element(by.buttonText('Buy')).click()

        expect($('h1').getText()).toEqual('Your potion order is:')
        element(by.buttonText('Next')).click()

        element(by.xpath("//label[text()='Quick payment']")).click()
        element(by.buttonText('Pay')).click()

        $("a[ui-sref='create-potion']").click()

        expect(element(by.xpath("//*[text()='Wing membrane']/../..")).$('div.box-details').getText()).toEqual('Available: 10')
    })

})