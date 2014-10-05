var HttpBackend = require('http-backend-proxy');

describe('as an owner I want system to track quantity of items in stock:', function(){
    describe('potion creating page', function(){
        var proxy

        beforeEach(function(){
            proxy = new HttpBackend(browser, {buffer: true })
            proxy.onLoad.whenGET(/views\/.*/).passThrough()
            browser.get('/#/order/payment')
            element(by.xpath("//label[text()='Quick payment']")).click()
        })

        it('should navigate to success page when placing order was successful', function(){
            proxy.whenPOST('/api/orders').respond(200, {"result":"ok"})
            proxy.flush()

            element(by.buttonText('Pay')).click()

            expect($('main div').getText()).toContain('Your order is payed and now will be processed')
        })

        it('should navigate to failure page when placing order failed', function(){
            proxy.whenPOST('/api/orders').respond(400, {"result":"fail"})
            proxy.flush()

            element(by.buttonText('Pay')).click()

            expect($('main div').getText()).toContain('Your order has failed.')
        })

        afterEach(function () {
            //Always call reset when ever an onload.when... has been invoked.
            proxy.onLoad.reset();
        });
    })

})