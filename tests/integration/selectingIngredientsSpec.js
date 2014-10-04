describe('as a witcher I want to be able to choose elixir ingredients:', function(){
    beforeEach(function(){
        browser.get('/#/create-potion');
    })

    function getPotionRow(index){
        var name = element(by.repeater('ingredient in potion.ingredients').row(index).column('{{ingredient.name}}')).getText()
        var count = element(by.repeater('ingredient in potion.ingredients').row(index).column('{{ingredient.count}}')).getText()
        var actionButton = element(by.repeater('ingredient in potion.ingredients').row(index)).$('button:not(.ng-hide)')

        return {
            name : name,
            count : count,
            actionButton : actionButton
        }
    }

    describe('when user clicks on [+] button', function(){
        var potionTable

        beforeEach(function(){
            var abominationLymphAddButton = element(by.repeater('ingredient in availableIngredients').row(0)).$('button')
            var alpFangsAddButton = browser.findElement(by.xpath("//*[text()='Alp fangs']/../button"))

            abominationLymphAddButton.click()
            alpFangsAddButton.click()
            alpFangsAddButton.click()

            potionTable = [0,1].map(function(index){
                return getPotionRow(index)
            })
        })

        it('should add ingredients to elixir', function(){
            expect(potionTable[0].name).toContain('Abomination lymph')
            expect(potionTable[1].name).toContain('Alp fangs')
        })


        it('it should stack ingredients of the same type', function(){
            expect(potionTable[1].count).toEqual('(2)')
        })

    })

})