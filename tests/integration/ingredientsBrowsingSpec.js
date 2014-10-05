describe('as a witcher I want to be able to view ingredients:', function(){
    it('should send user to potion creation page when going to root page', function(){
        browser.get('/');
        expect(element(by.css('h1')).getText()).toBe('Create potion')
    })

    describe('potion creating page', function(){
        beforeEach(function(){
            browser.get('/#/create-potion');
        })

        it('should display list of available ingredients', function(){
            // ** Angular will wait for $http calls to finish
            // ** It will work even if response time increases

            // ** Uses by.repeater
            var firstIngredientName = element(by.repeater('ingredient in availableIngredients').row(0).column('{{ ingredient.name }}')).getText()

            // Code below will not work. Column has to match by space
            // var firstIngredientName = element(by.repeater('ingredient in availableIngredients').row(0).column('{{ ingredient.name }}')).getText()

            var fourthIngredientName = element(by.repeater('ingredient in availableIngredients').row(3).column('{{ ingredient.name }}')).getText()

            expect(firstIngredientName).toEqual('Abomination lymph')
            expect(fourthIngredientName).toEqual('Ectoplasm')
        })
    })

})