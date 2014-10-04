var HttpBackend = require('http-backend-proxy');

describe('as a witcher I want to be able to view ingredients:', function(){
    it('should send user to potion creation page when going to root page', function(){
        browser.get('/');
        expect(element(by.css('h1')).getText()).toBe('Create potion')
    })

    describe('potion creatiin page', function(){
        var proxy

        beforeEach(function(){

        })

        it('should display list of available ingredients', function(){
            proxy = new HttpBackend(browser, {buffer: true })

            var ingredients = [{"name":"Abomination lymph","icon":"/images/mixture-icons/Substances_Abomination_lymph.png","quantity":"6","id":0}]

            proxy.onLoad.whenGET(/views\/.*/).passThrough()

            proxy.onLoad.whenGET('/api/ingredients').respond(200, ingredients)
            browser.get('/#/create-potion')

            var ingredientsCount = element.all(by.repeater('ingredient in availableIngredients')).then(function(el) { return el.length })
            expect(ingredientsCount).toEqual(1)
        })


        afterEach(function () {
            //Always call reset when ever an onload.when... has been invoked.
            proxy.onLoad.reset();
        });
    })

})